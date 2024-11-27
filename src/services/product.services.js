import { Products } from "../database/config";
import { AppError } from "../errors";

export const createProductService = async (name, description, price, stock) => {
    try {
        const newProduct = await Products.create({
            name,
            description,
            price,
            stock
        });

        return newProduct;
    } catch (error) {
        throw new AppError("Error creating product: " + error.message, 500);
    }
};

export const getAllProductsService = async () => {
    try {
        const products = await Products.findAll();

        products.forEach(p => {
            p.price = Number(p.price)
        })

        return products;
    } catch (error) {
        throw new AppError("Error fetching products: " + error.message, 500);
    }
};



export const deleteProductService = async (productId) => {
    try {
        const result = await Products.destroy({
            where: { id: productId }
        });

        if (result === 0) {
            throw new AppError(`Product with ID ${productId} not found`, 404);
        }

        return true;
    } catch (error) {
        throw new AppError("Error deleting product: " + error.message, 500);
    }
};

export const updateProductService = async (productId, updatedData) => {
    try {
        const product = await Products.findByPk(productId);

        if (!product) {
            throw new AppError("Product not found!", 404);
        }

        await product.update(updatedData);

        return product;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("An unexpected error occurred while updating the product.", 500);
    }
};