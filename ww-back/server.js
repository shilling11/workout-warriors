const express = require("express");
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

const Subscriber = require('./Subscriber');
const mongoose = require('mongoose');

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/workoutdb', () => {
      console.log('Subscriber database connected');
    }, (err) => {
      console.log(err);
    });

app.post('/post', async(req, res) => {

  const output = 
    `<h2 style='color: #12b575'>Thank you for subscribing to Workout Warriors!</h2>
    <p>You have subscribed from ${req.body.email}. You will now receive regular updates and weekly newsletters. </p>`

    const transporter = nodemailer.createTransport({
      service: 'outlook365',
      auth: {
        user: process.env.USER, //fill in username
        pass: process.env.PASS //fill in password
      },
    });

    const mailOptions = {
      from: `"Nodemon mailer" <${process.env.USER}>`,
      to: req.body.email,
      subject: 'New subscription',
      text: 'New sub!',
      html: output
    }

  const data = new Subscriber({
    email: req.body.email
  })

  Subscriber.exists({email: req.body.email}, async(err, result) => {
    if(result){
      console.log('Subscriber already exists!');
    }
    else{
      await transporter.sendMail(mailOptions, (err, data)=> {
        if (err){
            console.log(err);
            console.log('failure!');
        }
        else {
            console.log(data);
            console.log('success!');
        }
    });
  
      const val = await data.save();
      console.log('New subscriber added to database');
    }
  });

  res.redirect('/');
});


app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`);
});