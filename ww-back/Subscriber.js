const mongoose = require('mongoose');

const subSchema = new mongoose.Schema({
    email: String
})

module.exports = mongoose.model('Subscriber', subSchema);