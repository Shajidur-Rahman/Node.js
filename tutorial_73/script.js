const port = process.env.PORT || 3000;
const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs')

// EXPRESS CONFIGARETION
app.use('/static', express.static('static'))
app.use(express.urlencoded())
// PUG CONFIGARETION
// app.set('view engine', 'pug')

// ENDING POINT

const send = {'title':'this is written by pug ', 'contant':'lorem34'};
app.get('/', (red, res)=>{
    res.status(200).render('index.pug', send);
})

app.post('/', (req, res)=>{
    let name = req.body.name;
    let age = req.body.age;
    let email = req.body.email;
    let gender = req.body.gender;
    let about = req.body.about;
    let output = `the client is ${name}, ${age} years old, email is ${email}, gender is ${gender}, and his about is ${about}`
    fs.writeFileSync('output.txt', output)
    const send = {'message':'your form has been submitted successfully'};
    res.status(200).render('index.pug', send);
    
})

// STARTING THE SERVER 
app.listen(port, ()=>{
    console.log(`the port is started at http://localhost:${port}`);
})