require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router")
const cors = require("cors")
const mysql2 = require("mysql2");
require("./database");

const port = 3001;

app.use(express.json());
app.use(cors());
app.use(router);

//For testing purposes
// app.get("/",(req, res)=>{
//     res.send("Start Server")
// })

app.listen(port,()=>{
    console.log(`server start at port no: ${port}`)
})