import { Router } from "express";
import { getTransactionStatusController, processPaymentController } from "../controllers/transaction.controller.js";

const paymentRouter = Router();

paymentRouter.post("/payment/:userId", processPaymentController);
paymentRouter.get("/payment/status/:transactionId", getTransactionStatusController);


export default paymentRouter;
