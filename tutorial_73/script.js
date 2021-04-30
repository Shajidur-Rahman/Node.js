const port  =3000;
const http = require('http');
const express = require('express');
const app = express();

// EXPRESS CONFIGARETION
app.use('/static', express.static('static'))
// PUG CONFIGARETION
// app.set('view engine', 'pug')

// ENDING POINT
app.get('/', (red, res)=>{
    res.status(200).render('index.pug');
})

// STARTING THE SERVER 
app.listen(port, ()=>{
    console.log(`the port is started at http://localhost:${port}`);
})