// defines Sequelize model for the "ProductTag" table and imports Sequalize classes: Model and and Datatypes.
// imports Sequalize class instance from connection.js for database connection to enable this module to 
// define the model and associate it with the database connection.
import { Model, DataTypes } from 'sequelize';
import sequelize from './config/connection';
import { types } from 'util';  // does not appear to be used.

// create ProductTag instance of Model
class ProductTag extends Model { }

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
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
    modelName: 'product_tag',
  },
);

// export initialized Sequelize model instance
export default ProductTag;