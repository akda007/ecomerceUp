import { Users } from "../database/config"
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

    return transaction
}

export const getTransactionStatus = async (transactionId) => {
    const transaction = await Transactions.findByPk(transactionId);

    if (!transaction) {
        throw new AppError("Transaction not found", 404);
    }

    return transaction;
};