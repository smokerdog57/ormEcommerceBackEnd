// defines Sequelize model for the "Tag" table and imports Sequalize classes: Model and and Datatypes.
// imports Sequalize class instance from connection.js for database connection to enable this module to 
// define the model and associate it with the database connection.
import { Model, DataTypes } from 'sequelize';
import sequelize from './config/connection.js';

class Tag extends Model { }

Tag.init(
  {
    tag: {
      id: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      id: DataTypes.STRING,
    },
  },
  // define Sequalize model configuration options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
// export initialized Sequelize model instance
export default Tag;