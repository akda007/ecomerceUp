import { Sequelize } from "sequelize"
import { KartsModel } from "../models/kart.model"
import { ProductsModel} from "../models/product.model"
import { UsersModel } from "../models/user.model"
import { KartProductsModel } from "../models/kartproducts.model"
import { TransactionModel } from "../models/transaction.model";
import { SupplierModel } from "../models/supplier.model";
import { configDotenv } from "dotenv";
import { PostgresDialect } from "@sequelize/postgres"

configDotenv()

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;
const DB_PW = process.env.DB_PW;
const DB_USER = process.env.DB_USER;

const verifyList = {
    DB_HOST, DB_NAME, DB_PORT, DB_PW, DB_USER
}

let hasErrors = false;
Object.keys(verifyList).forEach(key => {
    if (!verifyList[key]) {
        hasErrors = true;
        console.log("Database config not set:", key)
    }
})

if (hasErrors)
    throw new Error("Database config invalid!")

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PW, {
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT,
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

export const Users = UsersModel(sequelize)
export const Karts = KartsModel(sequelize)
export const Products = ProductsModel(sequelize)
export const KartProducts = KartProductsModel(sequelize)
export const Transaction = TransactionModel(sequelize)
export const Supplier = SupplierModel(sequelize)

Karts.associate({Products: Products})
Products.associate({Karts: Karts})
KartProducts.associate({Products: Products})

Users.afterCreate(async (user, options) => {
    try {
        await Karts.create({
            userId: user.id
        })
    } catch (error) {
        console.error("Error when creating a kart for the User: ", error)
    }
})

sequelize.sync()

export default sequelize