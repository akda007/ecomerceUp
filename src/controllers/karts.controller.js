import { Karts } from "../database/config.js"
import { addProductToKartService, getKartProductsService } from "../services/kart.services.js"


export const listKartsController = async (req, res) => {
    const karts = await Karts.findAll()

    await res.json(karts)
}

export const addProductsToKartController = async (req, res) => {
    const { kartId } = req.params
    const { productId, amount } = req.body

    const result = await addProductToKartService(kartId, productId, amount)

    await res.json(result)
}

export const getKartProductsController = async (req, res) => {
    const { kartId } = req.params

    const result = await getKartProductsService(kartId)

    res.json(result)
}