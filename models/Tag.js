import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Tag extends Model {}

Tag.init(
  {
    // Define your columns here
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