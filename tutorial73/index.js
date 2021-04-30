const port  =3000;
const http = require('http');
const express = require('express');
const app = express();

// EXPRESS CONFIGARETION
app.use('/static', express.static('static'))
// PUG CONFIGARETION
app.set('view engine', 'pug')

// ENDING POINT
app.get.apply('/', (req, res)=>{
    res.status(200).send('my name is shajidur rahman')
})

// STARTING THE SERVER 
app.listen(port, ()=>{
    console.log(`the port is started at http://localhost:${port}`);
})