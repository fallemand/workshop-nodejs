const fs = require('fs');

//sync
console.log("inicio sync");
const text = fs.readFileSync('./text.txt', 'utf8');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

const result = text.replace(vowels, 'i');
console.log(result);
console.log("final");

//async
console.log("inicio async");
fs.readFile('./text.txt', 'utf8', (err, data) => {
    if(err) {
        console.log('error')
    }
    const result = data.replace(vowels, 'i');
    console.log(result);

});

console.log("final");
