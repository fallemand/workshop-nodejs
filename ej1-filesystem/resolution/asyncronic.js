const fs = require('fs');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

/*
 * Manipulating a stream asynchronously
 */
fs.readFile('text.txt', 'utf8', (err, data) => {
   if (err) throw err;

   console.log(data.replace(vowels, ''));
});

console.log('\x1b[33m%s\x1b[0m', 'Probablemente termine antes que lo anterior.');
