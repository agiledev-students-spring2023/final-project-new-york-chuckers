#!/usr/bin/env node
const server = require("./app.js"); // load up the web server

require('dotenv').config();
const port = process.env.PORT || 5076; // the port to listen to for incoming requests

// call express's listen function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`);
});
// a function to stop listening to the port
const close = () => {
  listener.close();
};
