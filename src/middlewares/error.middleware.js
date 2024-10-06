export const errorHandler = async (err, req, res, next) => {
    let status = 500
    const response = {
        message: err.message
    }

    res.status(status).json(response)

    next()
}