import { Router } from "express";
import { addProductsToKart, listKarts } from "../controllers/karts.controller.js";


const kartRouter = Router()

kartRouter.get("/karts", listKarts)
kartRouter.post("/karts/:kartId", addProductsToKart)

export default kartRouter