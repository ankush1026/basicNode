const fs = require("fs");

// Create New File
fs.writeFileSync('sync.js','This is Sync file content');

// Read File
const readData = fs.readFileSync('sync.js','utf-8');
console.log(readData);

// Rename File
fs.renameSync('sync.js','newFile.js');

// Append More data in file
fs.appendFileSync('sync.js','THis is additional content in file')

// Make new folder
fs.mkdir('New Folder');

// Delete Folder
fs.rmdirSync('New Folder')

// Delete File
fs.unlinkSync('sync.js');

