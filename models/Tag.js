import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Tag extends Model {}

Tag.init(
  {
    tag: {
      id: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

export default Tag;