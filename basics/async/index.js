const fs = require("fs");

// Create File
fs.writeFileSync('async','This is async file content',() => {
    
})

// Append more content in file
fs.appendFile('async','This is new content in file',() => {

})

// Rename File 
fs.rename('async','newFile');

// Read File
fs.readFile('async','utf-8',(err,data) => {
    console.log(data);
})

// Make Folder
fs.mkdir('New Folder',() => {

})

// Delete Folder
fs.rmdir('New Folder',() => {

})

// Delete File
fs.unlink('async',() => {
    
})