import { Router } from "express";
import { 
    createProductController, 
    getAllProductsController, 
    updateProductController, 
    deleteProductController 
} from "../controllers/products.controller.js"

const productRouter = Router();

productRouter.post("/products", createProductController);

productRouter.get("/products", getAllProductsController);

productRouter.put("/products/:productId", updateProductController);

productRouter.delete("/products/:id", deleteProductController);

export default productRouter;
