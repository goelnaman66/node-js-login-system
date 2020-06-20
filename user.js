const mongoose = require("mongoose")

var userschema = new mongoose.Schema({
    name: String,
    password: String,
    age: String,
    image: String
})

var users = mongoose.model('users', userschema);

module.exports = users;