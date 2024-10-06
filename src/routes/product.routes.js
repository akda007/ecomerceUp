import { Router } from "express";
import { createProductController, listProductsController } from "../controllers/products.controller.js";

const productRouter = Router()

productRouter.get("/products", listProductsController)
productRouter.post("/products", createProductController)

export default productRouter