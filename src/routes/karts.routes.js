import { Router } from "express";
import {
    addProductsToKartController,
    getKartProductsController,
    listKartsController,
    removeProductFromKartController
} from "../controllers/karts.controller.js";


const kartRouter = Router()


kartRouter.get("/karts", listKartsController);

kartRouter.post("/karts/:kartId", addProductsToKartController);

kartRouter.get("/karts/:kartId/products", getKartProductsController);

kartRouter.delete("/karts/:kartId/products", removeProductFromKartController);

export default kartRouter