const http = require('http');
const fs = require("fs");
const { dirname } = require('path');

const server = http.createServer((req,res) => {
    if(req.url==='/') {
        res.end("Hello from home page");
    } else if(req.url === '/api') {
        //res.end(`${__dirname}`)
        fs.readFile(`${__dirname}/userapi/api.json`,'utf-8',(err,data) => {
           //res.end(data);
           const objData = JSON.parse(data);
           res.end(objData[1].name) 
           
        })
    }
})

server.listen(8000,'127.0.0.1',() => {
    console.log("Listen Port");
})