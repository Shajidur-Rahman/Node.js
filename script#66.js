const http = require('http')
const fs = require('fs')
const filecontant = fs.readFileSync('html/index.html')

const server = http.createServer((req, res )=>{
    res.writeHead(200,{'Contant-type':'text.html'})
    res.end(filecontant)
});

server.listen(3000,'127.0.0.1');
console.log('listening port 80')