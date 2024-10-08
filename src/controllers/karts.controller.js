import { Karts } from "../database/config.js"
import { addProductToKartService, getKartProductsService, removeProductFromKartService } from "../services/kart.services.js"

export const listKartsController = async (req, res) => {
    try {
        const karts = await Karts.findAll();
        res.json(karts);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve karts." });
    }
};

export const addProductsToKartController = async (req, res) => {
    const { kartId } = req.params;
    const { productId, amount } = req.body;

    try {
        const result = await addProductToKartService(kartId, productId, amount);
        res.json({ message: "Product added or updated", result });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

export const getKartProductsController = async (req, res) => {
    const { kartId } = req.params;

    try {
        const result = await getKartProductsService(kartId);
        res.json(result);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

export const removeProductFromKartController = async (req, res) => {
    const { kartId } = req.params;
    const { productId, amount } = req.body;

    try {
        const result = await removeProductFromKartService(kartId, productId, amount);
        res.json({ message: "Product removed or quantity decreased", result });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};