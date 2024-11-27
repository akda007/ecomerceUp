import { Supplier } from "../database/config"
import { AppError } from "../errors"


export const createSupplierService = async (name, description) => {
    if (!name || !description) {
        throw new AppError("Empty field!", 400)
    }

    const data = await Supplier.create({name, description})

    return data
}


export const listAllSuppliers = async () => {
    return await Supplier.findAll()
}