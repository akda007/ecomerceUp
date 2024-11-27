import { Router } from "express";
import { createSupplierController, getAllSuppliersController } from "../controllers/supplier.controller";

const supplierRouter = Router()


supplierRouter.post("/supplier/create", createSupplierController)
supplierRouter.get("/supplier", getAllSuppliersController)

export default supplierRouter