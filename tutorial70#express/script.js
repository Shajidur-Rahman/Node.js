const express = require('express')
const path = require('path')
const app = express();
const port = 3000;

app.use('/static', express.static('static'))
app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'));

//using pug 
app.get('/demo', (red, res)=>{
    res.status(200).render('demo', { title: 'shajidur rahman', message: 'Hello there! i am shajidur rahman' })
})


app.get('/', (red, res)=>{
    res.send('this is my first app with express')
})
app.get('/about', (red, res)=>{
    res.send('this is about')
})
app.get('/contuct', (red, res)=>{
    res.send('this is contuct')
})

app.listen(port, ()=>{
    console.log(`the port is started at http://localhost:${port}`);
})