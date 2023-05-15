const mysql2 = require("mysql2");

const con = mysql2.createConnection({
    user: "root",
    host: "localhost",
    password: "MySQL123",
    database: "register"
});

con.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL: " + err.stack);
        return;
    }
    console.log("Connected to MySQL as id " + con.threadId);
});

module.exports = con;