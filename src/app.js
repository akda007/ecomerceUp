import "express-async-errors"
import express from "express"
import cors from "cors"
import productRouter from "./routes/product.routes.js"
import authenticationRouter from "./routes/authentication.routes.js"
import kartRouter from "./routes/karts.routes.js"
import { errorHandler } from "./middlewares/error.middleware.js"
import { verifyToken } from "./middlewares/auth.middleware.js"
import paymentRouter from "./routes/transaction.routes.js"
import supplierRouter from "./routes/supplier.routes.js"

const app = express()

//express addons
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(authenticationRouter)

//JWT Middleware
app.use(verifyToken)

app.use(productRouter)
app.use(kartRouter)
app.use(paymentRouter)
app.use(supplierRouter)

//Middleware handle errors on a response
app.use(errorHandler)

export default app