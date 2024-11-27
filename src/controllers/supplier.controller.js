import { createSupplierService, listAllSuppliers } from "../services/supplier.services"


export const createSupplierController = async (req, res) => {
    const {name, description} = req.body

    const result = await createSupplierService(name, description)

    if (!result) {
        await res.status(500).json({message: "Unable to create supplier!"})
    }

    await res.json(result)
}


export const getAllSuppliersController = async (req, res) => {
    const result = await listAllSuppliers()
    
    await res.json(result)
}