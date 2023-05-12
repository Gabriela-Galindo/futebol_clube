import { Model, DataTypes } from 'sequelize';
import sequelize from '.';

class UsersModel extends Model {
  declare id: number;
  declare username: string;
  declare password: string;
  declare email: string;
  declare role: number;
}

UsersModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'users',
  timestamps: false,
});

export default UsersModel;
