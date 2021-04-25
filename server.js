const fs = require('fs')
var http = require('http');
const file = fs.readFileSync('html/index.html')
//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200,{'Contant-type':'text.html'})
    // res.write('html/index.html'); //write a response to the client
  res.end(file); //end the response
}).listen(1337,'127.0.0.1'); //the server object listens on port 8080
