import { DataTypes } from "sequelize";

export const SupplierModel = (sequelize) => {
    const Supplier = sequelize.define('Supplier', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(600),
            allowNull: false,
        }
    });

    return Supplier;
};
