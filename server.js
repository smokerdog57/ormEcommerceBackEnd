const express = require('express');
const sequelize = require('./config/connection'); // Import Sequelize connection
const routes = require('./routes'); // Import your route definitions

const app = express();
const PORT = process.env.PORT || 3001; // Define the port for the Express server

app.use(express.json()); // Enable JSON request body parsing
app.use(express.urlencoded({ extended: true })); // Enable URL-encoded request body parsing

app.use(routes); // Mount your routes on the Express app

sequelize.sync({ force: false }).then(() => { // Sync Sequelize with the database (if necessary)
  app.listen(PORT, () => { // Start the Express server
    console.log(`App listening on port ${PORT}!`);
  });
});