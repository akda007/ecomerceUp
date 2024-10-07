import { DataTypes } from "sequelize";

export const KartProductsModel = (sequelize) => {
    const KartProduct = sequelize.define('KartProducts', {
        kartId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Karts',
                key: 'id',
            },
        },
        productId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Products',
                key: 'id',
            },
        },
        amount: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    });

    return KartProduct;
};
