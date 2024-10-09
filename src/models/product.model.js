import { DataTypes, Model } from "sequelize";


export const ProductsModel = (sequelize) => {
    const Product = sequelize.define('Products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    Product.associate = (models) => {
        Product.belongsToMany(models.Karts, { 
            through: 'KartProducts',
            foreignKey: 'productId',
            as: 'karts',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    };

    return Product
}
