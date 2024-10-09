import { Karts } from "../database/config.js"
import { addProductToKartService, getKartProductsService, getKartService, removeProductFromKartService } from "../services/kart.services.js"

export const listKartsController = async (req, res) => {
    try {
        const karts = await Karts.findAll();
        res.json(karts);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve karts." });
    }
};

export const addProductsToKartController = async (req, res) => {
    const { productId, amount } = req.body;

    const kart = await getKartService(res.locals.session.userId)

    try {
        const result = await addProductToKartService(kart.id, productId, amount);
        res.json({ message: "Product added or updated", result });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

export const getKartProductsController = async (req, res) => {
    const userId = res.locals.session.userId

    const kart = await getKartService(userId)

    try {
        const result = await getKartProductsService(kart.id);
        res.json(result);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

export const removeProductFromKartController = async (req, res) => {
    const userId = res.locals.session.userId

    const kart = await getKartService(userId)
    const { productId, amount } = req.body;

    try {
        const result = await removeProductFromKartService(kart.id, productId, amount);
        res.json({ message: "Product removed or quantity decreased", result });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};