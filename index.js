const express = require("express");
const path = require("path");
const users = require("./user.js");
const mongoose = require("mongoose")




mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error :'));
////db.once('open', function() {
//   console.log('we are connected')
//})








const app = express();
const port = 3000;
console.log(port);


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded())

app.get('/', (req, res) => {
    const params = { 'title': 'Pug is the best', 'content': 'con' }
    res.status(200).render('index.pug', params)

})
app.post('/', (req, res) => {
    const params = { 'title': 'Pug is the best', 'content': 'con' }
    res.status(200).render('index.pug', params)
    console.log(req.body)
    const name = req.body.name;
    const password = req.body.password;
    const age = req.body.age;
    users.create({
        name: name,
        password: password,
        age: age,
        image: req.body.image
    })



})












app.listen(3000, () => {
    console.log('the application started successfully on port ' + port);

})