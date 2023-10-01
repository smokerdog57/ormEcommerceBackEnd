import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();

let sequelize;

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
} catch (error) {
  console.error('Failed to connect to the database:', error);
  process.exit(1); // Terminate the application on error.
}

export default sequelize;