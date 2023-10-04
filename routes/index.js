// creates an instance of the Express router using the Router object you imported earlier. This router will be used
// to define the application routes.
const router = require('express').Router();
const apiRoutes = require('./api');  // imports the apiRoutes from ./api/index.js.

// mounts the apiRoutes on the /api path which handles any request to a path starting with /api and handled by apiRoutes 
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