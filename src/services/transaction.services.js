import { Users, Karts, Transaction, Products } from "../database/config"
import { AppError } from "../errors"
import { cleanUpKartService, getKartProductsService } from "./kart.services"


export const processPayment = async (userId, method) => {
    const user = await Users.findByPk(userId)

    if (!user)
        throw new AppError("User not found!", 404)

    const kart = await Karts.findOne({userId: user.id})

    if (!kart) 
        throw new AppError("User kart not found!", 404)

    const items = await getKartProductsService(kart.id)

    const totalValue = items.reduce((acc, value) => acc + value.price, 0)

    const transaction = await Transaction.create({
        userId,
        totalValue,
        paymentMethod: method,
        status: 'finished'
    });

    await cleanUpKartService(kart.id)

    await Promise.all(items.map(async (value) => {
        const product = await Products.findByPk(value.productId)
        product.stock -= value

        if (product.stock < 0) 
            product.stock = 0

        return await product.save()
    }))

    return transaction
}

export const getUserTransactions = async (userId) => {
    const transactions = await Transaction.findAll({where: { userId }});

    return transactions;
}

export const getTransactionStatus = async (transactionId) => {
    const transaction = await Transaction.findByPk(transactionId);

    if (!transaction) {
        throw new AppError("Transaction not found", 404);
    }

    return transaction;
};