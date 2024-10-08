import { AppError } from "../errors"

export const errorHandler = async (err, req, res, next) => {
    let status = 500
    const response = {
        message: err.message
    }

    if (err instanceof AppError) {
        status = err.status
    }

    res.status(status).json(response)

    next()
}