import { Router } from "express";
import { getTransactionStatusController, getTransctionsByUserId, processPaymentController } from "../controllers/transaction.controller"

const paymentRouter = Router();

paymentRouter.post("/payment", processPaymentController);
paymentRouter.get("/payment/status/:transactionId", getTransactionStatusController);
paymentRouter.get("/payment/list/:userId", getTransctionsByUserId)


export default paymentRouter;
