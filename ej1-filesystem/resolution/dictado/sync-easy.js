const fs = require('fs');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

/*
 * Easy way synchronously
 */
const output = fs.readFileSync('../../text.txt', 'utf8');

const text = output.replace(vowels, 'i');

console.log(text);
console.log('\x1b[33m%s\x1b[0m', 'Me muestro cuando termina lo anterior.');
