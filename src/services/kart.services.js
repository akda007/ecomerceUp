import { KartProducts, Products } from "../database/config"

export const addProductToKartService = async (kartId, productId, quantity = 1) => {
    try {
        const kart = await Karts.findByPk(kartId)

        if (!kart) {
            console.log("Error, card not found!")
            return
        }

        let kartProduct = await KartProducts.findOne({
            where: {
                kartId: kart.id,
                productId: productId
            }
        })

        if (kartProduct) {
            await kartProduct.update({
                amount: kartProduct.amount + quantity
            })
            return kartProduct
        }

        kartProduct = await KartProducts.create({
            kartId: kart.id,
            productId: productId,
            amount: quantity
        })

        return kartProduct
    } catch (error) {
        console.error(error)
    }
}

export const getKartProductsService = async (kartId) => {
    const kartProducts = await KartProducts.find({
        where: { kartId: kartId },
        include: [Products]
    })

    return kartProducts
}

export const cleanUpKart = async (kartId) => {
    const kartProducts = await KartProducts.destroy({
        where: { kartId: kartId },
    })
}