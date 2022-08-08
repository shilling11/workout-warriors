const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let output;

app.post('/post', (req, res) => {
    const output = 
    `<p>You have a new subscription from ${req.body.email}</p>`

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.USER,
          pass: process.env.PASS
        },
      });
    
      const mailOptions = {
        from: process.env.USER,
        to: process.env.USER,
        subject: 'New subscription',
        text: 'New sub!',
        html: output
      }
    
      transporter.sendMail(mailOptions, (err, data)=> {
        if (err){
            console.log(err);
            console.log('failure!');
        }
        else {
            console.log(data);
            console.log('success!');
        }
      })
    res.redirect('/');
})

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`);
})