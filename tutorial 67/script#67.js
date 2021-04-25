const http = require('http')
const fs = require('fs')

const home = fs.readFileSync('node.html')
const contuct = fs.readFileSync('contuct.html')
const about = fs.readFileSync('about.html')


const hostname = '127.0.01'
const port = '3000'


const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Contant-type', 'text/html')


    if (url == '/'){
        res.end(home);
    }
    else if (url == '/contuct'){
        res.end(contuct);
    }
    else if (url == '/about'){
        res.end(about);
    }
    else{
        res.statusCode = 404;
        res.end('404 not found')
    }


})

server.listen(port, hostname, ()=>{
    console.log(`servr starts at http://${hostname}:${port}/`)
})