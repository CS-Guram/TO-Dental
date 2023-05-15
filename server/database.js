/**
 * MySQL Database Configuration and Connection File
 */

// Import the mysql2 module
const mysql2 = require("mysql2");

// Create a connection to the MySQL database
const con = mysql2.createConnection({
    user: "root",
    host: "localhost",
    password: "Tikiti1988@",
    database: "register"
});

// Attempt to connect to the database
con.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL: " + err.stack);
        return;
    }
    // Print a success message to the console if the connection is successful
    console.log("Connected to MySQL as id " + con.threadId);
});

// Export the connection object for use in other parts of the application
module.exports = con;