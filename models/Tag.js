// Import necessary modules
const { Model, DataTypes } = require('sequelize');

// import database connection from connection.js
const sequelize = require('../config/connection.js');


// Define the Tag model by extending Model class
class Tag extends Model {}

// Initialize the Tag model with attributes and configuration
Tag.init(
  {
    // Define the attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  // Define Sequelize model configuration options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Export the initialized Sequelize model instance
module.exports = Tag;