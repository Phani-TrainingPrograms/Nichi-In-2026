//Nodejs gives a host of build in modules that can be used for developing applications. One such module is 'fs' module which is used for file system related operations like reading from files, writing to files etc.
//However, if U want to use as CommonJS module, U can use require() method to import the module as shown below:
//const fs = require('fs');//This example is a CommonJS module.
//U must save the file with .cjs extension for it to be treated as CommonJS module in a project which is using ES6 modules.

import fs from 'fs';//This example is a ES6 module itself.

const content = "An apple a day keeps the doctor away.";
const asyncFile = 'sampleAsync.txt';
//2 ways to write to a file using fs module: synchronous and asynchronous methods.
//Synchronous method:
fs.writeFileSync('sample.txt', content);
console.log("File written successfully using synchronous method.");
//This is a blocking activity

fs.writeFile(asyncFile, content, (err) => { //Where to write, what to write, callback function to execute after writing
    if (err) {
        console.error("Error writing file asynchronously:", err);
    } else {
        console.log("File written successfully using asynchronous method.");
    }
});

//append to the existing file
fs.appendFile(asyncFile, "If the Apple is not found, go the doctor", (err) => {
    if (err) {
        console.error("Error appending to file asynchronously:", err);
    }else{
        console.log("File appended successfully using asynchronous method.");
    }
});

//Reading from a file using asynchronous method
fs.readFile(asyncFile, 'utf8', (err, data) => {//Where to read from, encoding type, callback function to execute after reading, the contents of the file shall be in the variable 'data'
    if (err) {
        console.error("Error reading file asynchronously:", err);
    } else {
        console.log("File read successfully using asynchronous method. Content:");
        console.log(data);
    }
});
//try using readFileSync method to read the file synchronously.