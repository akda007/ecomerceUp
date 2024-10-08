import { getTransactionStatus as getTransactionStatusService, processPayment } from "../services/transaction.services";


export const processPaymentController = async (req, res) => {
    const { userId } = req.params;
    const { method } = req.body;

    const transaction = await processPayment(userId, method);
        res.status(200).json({
            message: "Payment processed successfully",
            transaction
    });
};

export const getTransactionStatusController = async (req, res) => {
    const { transactionId } = req.params;

    try {
        const transaction = await getTransactionStatusService(transactionId);
        res.status(200).json(transaction);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};