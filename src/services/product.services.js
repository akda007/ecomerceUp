import { Products } from "../database/config";


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
        console.error("Error creating product: ", error);
        throw error;
    }
};


export const getAllProductsService = async () => {
    try {
        const products = await Products.findAll();
        return products;
    } catch (error) {
        console.error("Error fetching products: ", error);
        throw error;
    }
};


export const updateProductService = async (productId, updates) => {
    try {
        const product = await Products.findByPk(productId);

        if (!product) {
            console.log(`Product with ID ${productId} not found`);
            return null;
        }

        const updatedProduct = await product.update(updates);
        return updatedProduct;
    } catch (error) {
        console.error("Error updating product: ", error);
        throw error;
    }
};


export const deleteProductService = async (productId) => {
    try {
        const result = await Products.destroy({
            where: { id: productId }
        });

        if (result === 0) {
            console.log(`Product with ID ${productId} not found`);
            return null;
        }

        console.log(`Product with ID ${productId} deleted successfully`);
        return true;
    } catch (error) {
        console.error("Error deleting product: ", error);
        throw error;
    }
};
