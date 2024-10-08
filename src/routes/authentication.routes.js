import { Router } from "express";

import { loginUserController, registerUserController } from "../controllers/authentication.controller"

const authenticationRouter = Router()

authenticationRouter.post("/register", registerUserController)
authenticationRouter.post("/login", loginUserController)

export default authenticationRouter