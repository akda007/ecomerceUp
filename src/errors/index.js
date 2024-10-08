export class AppError extends Error {
    status

    constructor(status) {
        this.status = status
    }
}