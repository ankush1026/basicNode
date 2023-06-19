const http = require('http');
const fs = require("fs");


//Using pipeline
const server = http.createServer();
server.on("request",(req,res) => {
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);
})


// New method to read file
//const server = http.createServer();
// server.on("request",(req,res) => {
//     const rstream = fs.createReadStream('input.txt');
//     rstream.on("data",(chunkdata) => {
//         res.write(chunkdata);
//     });
//     rstream.on("end",() => {
//         res.end()
//     });
//     rstream.on("error",(err) => {
//         console.log(err);
//         res.end("File not found");
//     })
// })

// old method to read file
// const server = http.createServer();
// server.on("request",(req,res) => {
//     fs.readFile('input.txt','utf-8',(err,data) => {
//         res.end(data)
//     })
// })

server.listen(8000,'127.0.0.1',() => {
    console.log("Listen Port");
})