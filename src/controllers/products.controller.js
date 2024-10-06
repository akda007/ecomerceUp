import { Products } from "../database/config.js"

export const createProductController = async (req, res) => {
    const product = req.body

    const result = await Products.create(product)

    await res.send(result)
}


export const listProductsController = async (req, res) => {
    const products = await Products.findAll()

    await res.json(products)
}