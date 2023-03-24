const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register",(req,res)=>{
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

module.exports = router