// imports Router object from the express library which allows creation a router instance 
// for defining routes.
// import { Router } from 'express';
const Router = require('express');

// imports the apiRoutes from ./api/index.js. 
const apiRoutes = require('./api');

// creates an instance of the Express router using the Router object you imported earlier. This router will be used
// to define the application routes.
const router = require('express').Router();

// mounts the apiRoutes on the /api path which handles any request to a path starting with /api will be handled
// by the routes defined in apiRoutes. 
router.use('/api', apiRoutes);

// defines a fallback route handler for a route request for a non-existant route.
// If none of the previously defined routes match the requested URL, this 
// handler will send back an HTML response with the message "Wrong Route!". 
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// exports the router object, making it available for use in other 
// parts of app (e.g., server.js) .
module.exports = router;


