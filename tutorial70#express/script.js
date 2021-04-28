const express = require('express')

const app = express();
const port = 3000;

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
    console.log(`the port is started at ${port}`);
})