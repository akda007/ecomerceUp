import { Sequelize } from "sequelize"
import { MySqlDialect } from "@sequelize/mysql";
import { KartsModel } from "../models/kart.model.js";
import { ProductsModel} from "../models/product.model.js";
import { UsersModel } from "../models/user.model.js";
import { KartProductsModel } from "../models/kartproducts.model.js";

const sequelize = new Sequelize('ecomerce', 'root', '123321', {
    host: 'localhost',
    dialect: 'mysql', // Use 'mysql' as the dialect directly
    port: 3306,
    logging: console.log,
})

export const Users = UsersModel(sequelize)
export const Karts = KartsModel(sequelize)
export const Products = ProductsModel(sequelize)
export const KartProducts = KartProductsModel(sequelize)

Karts.associate({Products: Products})
Products.associate({Karts: Karts})

Users.afterCreate(async (user, options) => {
    try {
        await Karts.create({
            userId: user.id
        })
    } catch (error) {
        console.error("Error when creating a kart for User: ", error)
    }
})

sequelize.sync()

export default sequelize