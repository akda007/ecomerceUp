import { DataTypes, Model } from "sequelize";

export const KartsModel = (sequelize) => {
    const Kart = sequelize.define('Karts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
        },
    })

    Kart.associate = (models) => {
        Kart.belongsToMany(models.Products, {
            through: 'KartProducts',
            foreignKey: 'kartId',
            as: 'products',
        });
    };

    return Kart
}