import { Karts } from "../database/config.js"


export const listKarts = async (req, res) => {
    const karts = await Karts.findAll()

    await res.json(karts)
}

export const addProductsToKart = async (req, res) => {
    const { kartId } = req.params
    const { productId } = req.body

    const kart = await Karts.findByPk(Number(kartId))
    const result = await kart.addProduct(productId)

    await res.json(result)
}