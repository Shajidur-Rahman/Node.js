function server() {
  const http = require('http');

  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World my name is shidur rhaman');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}



// modules

console.log('name')

// read and right 
const fs = require('fs');
let read = fs.readFileSync('node.txt', 'utf-8');
read = read.replace('this is js', 'this is python')
console.log(read);

console.log('creating a new file')
fs.writeFileSync('node2.txt', 'Text')


const readwrite = require('fs')
let read1 = readwrite.writeFileSync('node3.txt', 'Hello World my name is shajidur rahman')