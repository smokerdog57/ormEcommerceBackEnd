// defines Sequelize model for the "Product" table and imports Sequalize classes: Model and and Datatypes.
// imports Sequalize class instance from connection.js for database connection to enable this module to 
// define the model and associate it with the database connection.
import { Model, DataTypes, DECIMAL } from 'sequelize';
import sequelize from '../config/connection.js';

// create Product instance of Model
class Product extends Model { }

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isInt: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category', // Specify the referenced model.
        key: 'id',
      },
    },
  },
  // define Sequalize model configuration options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);
// export initialized Sequelize model instance
export default Product;