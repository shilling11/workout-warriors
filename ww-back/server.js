const express = require("express");
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/post', (req, res) => {
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
});