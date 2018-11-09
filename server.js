// Dependencies
//npm packages
// =============================================================
const express = require("express");


// Sets up the Express App
// =============================================================
const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below point our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
//==============================================================
require("./app/routes/htmlRoutes")(app);
require("./app/routes/apiRoutes")(app);

// LISTENER
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });