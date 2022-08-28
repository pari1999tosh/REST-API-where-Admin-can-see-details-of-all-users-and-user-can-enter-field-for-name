const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number,
    city: String,
    phone: Number,
    email: String,
    qualification: String,
});

module.exports = mongoose.model('user', userschema);