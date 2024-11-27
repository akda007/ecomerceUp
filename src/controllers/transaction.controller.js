import { getTransactionStatus as getTransactionStatusService, processPayment } from "../services/transaction.services";


export const processPaymentController = async (req, res) => {
    const userId = res.locals.session.userId
    const { method } = req.body;

    const transaction = await processPayment(userId, method);
        res.status(200).json({
            message: `Payment ${method} processed successfully`,
            transaction
    });
};

export const getTransactionStatusController = async (req, res) => {
    const { transactionId } = req.params;

    try {
        const transaction = await getTransactionStatusService(transactionId);
        res.status(200).json({
            message: "Transaction Fetched!",
            transaction
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

export const getTransctionsByUserId = async (req, res) => {
    const { userId } = req.params

    const list = await getTransctionsByUserId(Number(userId))

    await res.json({
        message: "Transaction list Fetched!",
        list
    })
}