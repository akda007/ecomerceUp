import { Users } from "../database/config.js"
import { loginUserService, registerUserService } from "../services/authentication.services.js"


export const registerUserController = async (req, res) => {
    const {username, email, password} = req.body

    const account = await registerUserService(username, email, password)

    await res.json({message: "Registered!"})
}


export const loginUserController = async (req, res) => {
    const {username, password} = req.body

    const token = await loginUserService(username, password)

    res.json({
        message: "Logged in!",
        token
    })
}