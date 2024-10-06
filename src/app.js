import "express-async-errors"
import express from "express"
import cors from "cors"
import productRouter from "./routes/product.routes.js"
import authenticationRouter from "./routes/authentication.routes.js"
import kartRouter from "./routes/karts.routes.js"
import { errorHandler } from "./middlewares/error.middleware.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(authenticationRouter)

app.use(productRouter)
app.use(kartRouter)

app.use(errorHandler)

export default app