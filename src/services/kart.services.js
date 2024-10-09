import { KartProducts, Karts, Products, Users } from "../database/config"
import { AppError } from "../errors";

export const addProductToKartService = async (kartId, productId, quantity = 1) => {
    try {
        const kart = await Karts.findByPk(kartId);

        if (!kart) {
            throw new AppError("Error: Kart not found!", 404);
        }

        let kartProduct = await KartProducts.findOne({
            where: {
                kartId: kart.id,
                productId: productId
            }
        });

        if (kartProduct) {
            await kartProduct.update({
                amount: quantity
            });
            return kartProduct;
        }

        kartProduct = await KartProducts.create({
            kartId: kart.id,
            productId: productId,
            amount: quantity
        });

        return kartProduct;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("An unexpected error occurred while adding product to kart.", 500);
    }
}

export const removeProductFromKartService = async (kartId, productId, quantity = 1) => {
    try {
        const kart = await Karts.findByPk(kartId);

        if (!kart) {
            throw new AppError("Error: Kart not found!", 404);
        }

        let kartProduct = await KartProducts.findOne({
            where: {
                kartId: kart.id,
                productId: productId
            }
        });

        if (!kartProduct) {
            throw new AppError("Product not found in the kart.", 404);
        }

        const newQuantity = kartProduct.amount - quantity;
        if (newQuantity <= 0) {
            await kartProduct.destroy();
        } else {
            await kartProduct.update({
                amount: newQuantity
            });
        }

        return kartProduct;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("An unexpected error occurred while removing product from kart.", 500);
    }
}

export const getKartProductsService = async (kartId) => {
    try {
        const kartProducts = await KartProducts.findAll({
            where: { kartId: kartId },
            include: [{
                model: Products,   // Join with Products model
                as: 'product',     // Alias (if necessary)
            }]
        });

        if (!kartProducts) {
            throw new AppError("No products found in the kart.", 404);
        }

        return kartProducts;
    } catch (error) {
        console.log(error)
        if (error instanceof AppError) {
            throw error; 
        }
        throw new AppError("An unexpected error occurred while retrieving kart products.", 500);
    }
}

export const cleanUpKartService = async (kartId) => {
    try {
        const kartProducts = await KartProducts.destroy({
            where: { kartId: kartId },
        });

        if (kartProducts === 0) {
            throw new AppError("No products found to clean up in the kart.", 404);
        }
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("An unexpected error occurred while cleaning up the kart.", 500);
    }
}


export const getKartService = async (userId) => {
    const kart = await Karts.findOne({userId})
    
    return kart
}