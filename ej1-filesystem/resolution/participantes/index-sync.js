const fs = require('fs');
var keys = require('./keys.json');

let text = fs.readFileSync('../text.txt', 'utf8');

Object.keys(keys).forEach(key => {
  text = text.replace(key, keys[key]);
});

fs.writeFileSync('output.txt', text, 'utf8');

console.log(text);