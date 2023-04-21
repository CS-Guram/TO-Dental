const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
const con = require("../database");

router.post('/register', (req, res) => {
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
});

router.post("/login", (req, res) => {
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
});

router.post("/appointment",(req,res)=>{
    const data = {fname, lname, email, message} = req.body;

    
    try{
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        });

        const mailOptions = {
            from : email,
            to : process.env.EMAIL,
            subject:"New Contact",
            html:`<p>${"First name: " + data.fname} 
                    <br> ${"Last name: " + data.lname} 
                    <br> ${"Email: " + data.email} 
                    <br> ${"Message: " + data.message} </p>`
        }

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("Error",error)
            }else{
                console.log("Email Sent" + info.response);
                res.status(201).json({status:201,info})
            }
        })
    } catch (error) {
        res.status(201).json({status:401,error})

    }

    //For testing purposes
    //
    //console.log(req.body);
});

router.get('/dashboard/:idpatients', (req, res) => {
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
  
module.exports = router