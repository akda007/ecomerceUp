import { Router } from "express";
import { getTransactionStatusController, processPaymentController } from "../controllers/transaction.controller"

const paymentRouter = Router();

paymentRouter.post("/payment", processPaymentController);
paymentRouter.get("/payment/status/:transactionId", getTransactionStatusController);


export default paymentRouter;
