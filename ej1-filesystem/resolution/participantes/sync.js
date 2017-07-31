const fs = require('fs');
const replaces = JSON.parse(fs.readFileSync('../../replaces.json', 'utf8'));

/*
 * Easy way synchronously
 */
let output = fs.readFileSync('../../text.txt', 'utf8');

Object.keys(replaces).forEach(prop => {
  output = output.replace(RegExp(prop, 'ig'), replaces[prop]);
});

console.log(output);
console.log('\x1b[33m%s\x1b[0m', 'Me muestro cuando termina lo anterior.');
