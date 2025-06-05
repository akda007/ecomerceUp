import { Users } from "../database/config"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { AppError } from "../errors"
import { secretToken } from "../middlewares/auth.middleware"

export const registerUserService = async (username, email, password) => {
    const userExists = await Users.findOne({ where: { username: username } })

    if (userExists)
        throw new AppError("Username is already registered!", 400)

    const saltRounds = 10

    const hashedPw = await bcrypt.hash(password, saltRounds)

    const user = await Users.create({
        username,
        email,
        password: hashedPw
    })


    return user
}


export const loginUserService = async (username, password) => {
    const userExists = await Users.findOne({ where: {username: username}})

    if (!userExists)
        throw new AppError("User not found!", 404)

    const result = await bcrypt.compare(password.trim(), userExists.password)


    if (!result)
        throw new AppError("Unauthorized!", 401)

    const token = jwt.sign({
        sub: username,
        userId: userExists.id
    }, secretToken, {algorithm: "HS256", expiresIn: "24h"})
    

    return token
}