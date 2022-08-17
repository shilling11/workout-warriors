const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    qty: Number,
    total: Number
});

exports.products = mongoose.model('product', productSchema, 'cart');