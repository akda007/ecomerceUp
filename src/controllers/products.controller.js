import { createProductService, deleteProductService, getAllProductsService, updateProductService } from "../services/product.services"

export const createProductController = async (req, res) => {
    const { name, description, price, stock } = req.body;

    try {
        const newProduct = await createProductService(name, description, price, stock);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error });
    }
};

export const getAllProductsController = async (req, res) => {
    try {
        const products = await getAllProductsService();

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

export const updateProductController = async (req, res) => {
    const { productId } = req.params;
    const updatedData = req.body;

    try {
        const updatedProduct = await updateProductService(productId, updatedData);
        res.json({ message: "Product updated successfully", updatedProduct });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

export const deleteProductController = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteProductService(id);

        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
};
