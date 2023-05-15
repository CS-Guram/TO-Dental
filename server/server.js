/**
 * Backend server for My App.
 * 
 * This file defines an Express.js server that listens for HTTP requests on port 3001. It uses the
 * dotenv module to load environment variables from a .env file, and imports several other modules
 * required for its operation, including express, cors, mysql2, and router. The app uses middleware
 * to parse incoming JSON request bodies, enable CORS for all routes, and mount the routes defined
 * in router.js. Finally, the server is started by calling app.listen() and passing in the port
 * variable.
 */

// This line loads the .env file containing email and password
require("dotenv").config();

// Import required modules
const express = require("express");
const app = express();
const router = require("./routes/router")
const cors = require("cors")
const mysql2 = require("mysql2");
require("./database");

// Define port number for server to listen on
const port = 3001;

// Configure middleware
app.use(express.json());
app.use(cors());
app.use(router);

// Start server listening on specified port
app.listen(port,()=>{
    console.log(`server start at port no: ${port}`)
})