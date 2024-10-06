import { Users } from "../database/config.js"


export const registerUserController = async (req, res) => {
    const data = req.body

    const result = await Users.create(data)

    await res.json(result)
}