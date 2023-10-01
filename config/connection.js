// establish connection to MySQL database using the Sequelize library and dotenv for evironment variables
import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config(); // call config method of dotenv ibrary to load environment variables from .env

let sequelize; 

// try block code establishes a database connection using Sequelize and checks for  
// JAWSDB_URL environment variable (commonly used in cloud platforms like Heroku). 
// IF JAWSDB_URL variable is defined, use to create a Sequelize instance,
// ELSE create instance using DB_NAME, DB_USER, DB_PASSWORD, defined in the .env file.
try {
  sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
        },
      });

// ERROR HANDLER logs error message to the console and then terminates the application using process.exit(1). 
} catch (error) {
  console.error('Failed to connect to the database:', error);
  process.exit(1); // Terminate the application on error.
}
// export configured Sequelize instance connection
export default sequelize;