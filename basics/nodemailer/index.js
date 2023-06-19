const express = require('express');
const app = express();
let PORT = 5000;
app.get("/",(req,res) => {
    res.end("server");
})

const start = async() => {
    try {
        app.listen(PORT,() => {
            console.log("5000 port");
        })
    } catch(error) {

    }
}

start()