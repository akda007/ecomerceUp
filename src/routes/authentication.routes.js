import { Router } from "express";
import { registerUserController } from "../controllers/authentication.controller.js";

const authenticationRouter = Router()

authenticationRouter.post("/register", registerUserController)

export default authenticationRouter