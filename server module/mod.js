// creating a function
function server(hostname,port, typefu,first,second, third, fourth ) {

    // importing node module
    const http = require('http')
    const fs = require('fs')

    // file that will served 
    const home = fs.readFileSync(`./${first}`)
    const services = fs.readFileSync(`./${second}`)
    const about = fs.readFileSync(`./${third}`)
    const contuct = fs.readFileSync(`./${fourth}`)



    // host name and port name
    const host = hostname  //'127.0.01'
    const port2 = port //'3000'



    // making the server 
    const server = http.createServer((req, res) => {
        console.log(req.url);
        url = req.url;
        res.statusCode = 200;
        res.setHeader('Contant-type', `text/${typefu}`)



        // here you should use express
        if (url == '/') {
            res.end(home);
        }
        else if (url == '/services') {
            res.end(services);
        }
        else if (url == '/contuct') {
            res.end(contuct);
        }
        else if (url == '/about') {
            res.end(about);
        }
        else {
            res.statusCode = 404;
            res.end('404 not found')
        }


    })


    // listining the server
    server.listen(port, hostname, () => {
        console.log(`servr starts at http://${host}:${port2}/`)
    })
};



// a demo how to write the module
// server('127.0.0.1',3000,'html','home.html','services.html','about.html','contuct.html');

// making the server to a module
module.exports = server;










// N.B. : you can only use 4 files. not more file will be allowed 
// if you want to add more file you need to edit the module file 


// like this 


// first part
// function server(hostname,port, typefu,first,second, third, fourth, more, more2, more3, more4 )




// second part

    // // making the server 
    // const server = http.createServer((req, res) => {
    //     console.log(req.url);
    //     url = req.url;
    //     res.statusCode = 200;
    //     res.setHeader('Contant-type', `text/${typefu}`)



    //     // here you should use express
    //     if (url == '/') {
    //         res.end(home);
    //     }
    //     else if (url == '/services') {
    //         res.end(services);
    //     }
    //     else if (url == '/contuct') {
    //         res.end(contuct);
    //     }
    //     else if (url == '/more ') {
    //         res.end(more.html);
    //     }
    //     else if (url == '/more2') {
    //         res.end(more2.html);
    //     }
    //     else if (url == '/more3') {
    //         res.end(more3.html);
    //     }
    //     else if (url == '/more4') {
    //         res.end(more4.html);
    //     }
    //     else {
    //         res.statusCode = 404;
    //         res.end('404 not found')
    //     }


    // })


