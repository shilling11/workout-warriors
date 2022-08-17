const express = require("express");
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

const Subscriber = require('./Subscriber');
const mongoose = require('mongoose');
const Cart = require('./Cart');

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/workoutdb', () => {
      console.log('Database connected');
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

  res.redirect('back');
});

app.post('/addToCart', async(req, res) => {
    const item = new Cart.products({
    qty: req.body.qty,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    total: Math.round((req.body.price*req.body.qty) * 100) / 100
  });

    Cart.products.exists({name: req.body.name}, async(err, result)=> {
      if (result) {
        await Cart.products.updateOne({name: req.body.name}, {$inc: {qty: item.qty, total: item.total}});
      }
      else{
        const val = await item.save();
        console.log(`${item.name} added to cart! Total for item is now ${item.total}`);
      }
    });

    res.redirect('/addToCart');
});

app.post('/deleteItem', async(req, res) => {
  await Cart.products.deleteOne({name: req.body.name});
  res.redirect('back');
})

app.get('/addToCart', async(req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(await Cart.products.find({}));
})

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`);
});