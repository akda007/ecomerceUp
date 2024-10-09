import { Router } from "express";
import {
    addProductsToKartController,
    getKartProductsController,
    listKartsController,
    removeProductFromKartController
} from "../controllers/karts.controller"


const kartRouter = Router()


kartRouter.get("/karts", listKartsController);

kartRouter.post("/kart/products/add", addProductsToKartController);

kartRouter.get("/kart/products/get", getKartProductsController);

kartRouter.delete("/kart/products/delete", removeProductFromKartController);

export default kartRouter