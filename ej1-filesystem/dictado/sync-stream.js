const fs = require('fs');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');
let output = '';

/*
 * Manipulating a stream synchronously
 */
const readStream = fs.createReadStream('../../text.txt');
const writeStream = fs.createWriteStream("output.txt")

readStream.on('data', textChunk => {
  output += textChunk.toString('utf8').replace(vowels, 'i');
  writeStream.write(output);
  
  console.log(output)
}).on('end', () => {
  console.log('terminé');
});

console.log('\x1b[33m%s\x1b[0m', 'Probablemente me muestre antes que lo anterior.');