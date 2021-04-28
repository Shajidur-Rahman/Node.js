const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req ,res)=>{
    res.statusCode = 200;
    res.setHeader('Contant-type', 'text.html')
    res.end('hello world')
})

server.listen(port, hostname), ()=>{
    console.log(`this server is on http://${hostname}:${port}`)
}