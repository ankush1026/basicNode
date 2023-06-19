const os = require("os");

// Window 32 or 64 bit
console.log(os.arch());

// To get info about free memory
const freeMemory = os.freemem()
console.log(`${freeMemory/1024/1024/1024}`)

// To get info about total memory
console.log(os.totalmem());

// To get info about platform
console.log(os.platform());