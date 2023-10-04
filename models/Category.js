// defines Sequelize model for the "Category" table and imports Sequalize classes: Model and and Datatypes.
// imports Sequalize class instance from connection.js for database connection to enable this module to 
// define the model and associate it with the database connection.
// import { Model, DataTypes } from 'sequelize';
// import sequelize from '../config/connection.js';

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// create Category instance of Model
class Category extends Model {}

// initialize column definitions
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  // define Sequalize model configuration options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
// export initialized Sequelize model instance
// export default Category;
module.exports = Category;