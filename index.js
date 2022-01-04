const { readFile } = require('fs');

readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt)
});

// Node registers a callback, executes the script and runs the 
// callback when the file has been read.
console.log('Do this ASAP');