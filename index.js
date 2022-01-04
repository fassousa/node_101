const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf8');

console.log(txt);
// The second log only runs after the file has been read.
// SYNC === BLOCKING
console.log('Do this ASAP');