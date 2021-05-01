const port  =3000;
const http = require('http');
const express = require('express');
const app = express();

// EXPRESS CONFIGARETION
app.use('/static', express.static('static'))
// PUG CONFIGARETION
// app.set('view engine', 'pug')

// ENDING POINT

const send = {'title':'this is written by pug ', 'contant':'lorem34'};
app.get('/', (red, res)=>{
    res.status(200).render('index.pug', send);
})

// STARTING THE SERVER 
app.listen(port, ()=>{
    console.log(`the port is started at http://localhost:${port}`);
})