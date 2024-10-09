import { Sequelize } from "sequelize"
import { MySqlDialect } from "@sequelize/mysql";
import { KartsModel } from "../models/kart.model"
import { ProductsModel} from "../models/product.model"
import { UsersModel } from "../models/user.model"
import { KartProductsModel } from "../models/kartproducts.model"
import { TransactionModel } from "../models/transaction.model";

const sequelize = new Sequelize('ecomerce', 'root', '123321', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: console.log,
})

export const Users = UsersModel(sequelize)
export const Karts = KartsModel(sequelize)
export const Products = ProductsModel(sequelize)
export const KartProducts = KartProductsModel(sequelize)
export const Transaction = TransactionModel(sequelize)

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