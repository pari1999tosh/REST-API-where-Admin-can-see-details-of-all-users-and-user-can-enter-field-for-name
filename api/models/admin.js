const mongoose = require('mongoose');

const adminschema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    password: String
});

module.exports = mongoose.model("admin", adminschema);