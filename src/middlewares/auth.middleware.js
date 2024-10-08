import { config } from "dotenv";
import { AppError } from "../errors";
import jwt from "jsonwebtoken"

config();

let secretToken = process.env.SECRET_TOKEN  ?? "defaulttoken"

if (secretToken === "defaulttoken") {
    console.error("Secret token is undefined, using the default value!")
}


export const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token)
        throw new AppError("Empty authorization headers", 401)
    
    const jwtString = token.replace("Bearer", "").trim()

    const decoded = await jwt.verify(jwtString, secretToken)

    res.locals.sessionInfo = decoded
    next()
}

export {secretToken}