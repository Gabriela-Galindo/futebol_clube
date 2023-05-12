import { Model, DataTypes } from "sequelize";
import sequelize from ".";

class TeamsModel extends Model {
  declare id: number;
  declare teamName: string;
}

TeamsModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    teamName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'teams',
    timestamps: false,
});

export default TeamsModel;