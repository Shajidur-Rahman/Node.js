const http = require('http')
const fs = require('fs')
const filecontant = fs.readFileSync('cd ../gymwebsite/index.html')

const server = http.createServer((req, res )=>{
    res.writeHead(200,{'Contant-type':'text.html'})
    res.end(filecontant)
});

server.listen(80, "127.0.0.1");
console.log('listening port 80')