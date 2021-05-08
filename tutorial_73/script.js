const port = process.env.PORT || 3000;
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contuctdance', { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const bodyparser = require('body-parser')
const fs = require('fs')
// mongodb
const contuctSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    gender: String,
    about: String
});

const contuct = mongoose.model('contuct', contuctSchema); // here will creat collections 

// EXPRESS CONFIGARETION
app.use('/static', express.static('static'))
app.use(express.urlencoded())
// PUG CONFIGARETION
// app.set('view engine', 'pug')

// ENDING POINT

const send = { 'title': 'this is written by pug ', 'contant': 'lorem34' };
app.get('/', (red, res) => {
    res.status(200).render('index.pug', send);
})

app.post('/', (req, res) => {
    // let name = req.body.name;
    // let age = req.body.age;
    // let email = req.body.email;
    // let gender = req.body.gender;
    // let about = req.body.about;
    // let output = `the client is ${name}, ${age} years old, email is ${email}, gender is ${gender}, and his about is ${about}`
    // fs.writeFileSync('output.txt', output)
    // const send = { 'message': 'your form has been submitted successfully' };
    // res.status(200).render('index.pug', send);
    let mydata = new contuct(req.body);
    mydata.save().then(()=>{
       res.send('successfully saved');
    }).catch(()=>{
        res.status(400).send('items is not saved')
    })


})

// STARTING THE SERVER 
app.listen(port, () => {
    console.log(`the port is started at http://localhost:${port}`);
})