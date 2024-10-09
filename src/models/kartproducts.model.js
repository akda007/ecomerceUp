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
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    KartProduct.associate = (models) => {
        KartProduct.belongsTo(models.Products, {
            foreignKey: 'productId',
            as: 'product',  // Alias for the join
        });
    }

    return KartProduct;
};
