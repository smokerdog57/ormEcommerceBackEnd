import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

class Product extends Model {}

Product.init(
  {
    // Define your columns here
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

export default Product;