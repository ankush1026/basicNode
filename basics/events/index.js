const EventEmitter = require("events");
const event = new EventEmitter();

// event.on('sayname',() => {
//     console.log("My name is ANkush")
// })

// event.emit("sayname")

event.on("checkParameter",(sc,msg) => {
    console.log(`code ${sc} and ${msg}`)
})

event.emit("checkParameter",200,"ok")