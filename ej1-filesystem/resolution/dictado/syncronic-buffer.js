const fs = require('fs');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');


/*
 * Manipulating a stream synchronously
 */
const stream = fs.createReadStream('../text.txt');

stream.on('data', textChunk => {
  console.log(textChunk.toString('utf8').replace(vowels, ''));
});

stream.on('end', () => {
  console.log('terminé');
});
console.log('\x1b[33m%s\x1b[0m', 'Me ejecuto cuando termina lo anterior.');
