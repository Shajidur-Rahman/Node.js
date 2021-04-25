const http = require('http')
const fs = require('fs')
const { url } = require('node:inspector')
const home = fs.readFileSync('node.html')
const contuct = fs.readFileSync('contuct.html')
const about = fs.readFileSync('about.html')

const hostname = '127.0.01'
const port = '3000'

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url2 = req.url;
    res.statusCode = 200;
    res.setHeader('Contant-type', 'text/html')

    if (url2 == '/'){
        res.end(home);
    }
    else if (url2 == '/contuct'){
        res.end(contuct);
    }
    else if (url2 == '/about'){
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