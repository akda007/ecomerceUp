import { Router } from "express";
import { createProductController, listProductsController } from "../controllers/products.controller.js";

const productRouter = Router()

router.post('/products', createProductController);
router.get('/products', getAllProductsController);
router.put('/products/:id', updateProductController);
router.delete('/products/:id', deleteProductController);

export default productRouter