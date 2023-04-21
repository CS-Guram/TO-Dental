const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const con = mysql2.createConnection({
    user: "root",
    host: "localhost",
    password: "Tikiti1988@",
    database: "register"
})

con.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL: " + err.stack);
        return;
    }
    console.log("Connected to MySQL as id " + con.threadId);
});


app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("INSERT INTO users (email, username, password) VALUES (?, ?, ?)", [email, username, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})



app.get('/dashboard/:idpatients', (req, res) => {
    const idpatients = req.params.idpatients;
    con.query(
      'SELECT email, username, procedures, date, time FROM users WHERE idpatients = ?',
      [idpatients],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Server error');
        } else {
          if (result.length > 0) {
            const data = {
              email: result[0].email,
              username: result[0].username,
              procedures: result[0].procedures,
              date: result[0].date,
              time: result[0].time,
            };
            res.send(data);
          } else {
            res.status(404).send({ message: 'Patient not found' });
          }
        }
      }
    );
  });

  const port = 3001;

app.listen(port, () => {
    console.log("running backend server");
    console.log(`Server started on port ${port}`);
})