const fs = require('fs');
var keys = require('./keys.json');
let text;

fs.readFile('../text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  text = data;

  Object.keys(keys).forEach(key => {
    text = text.replace(key, keys[key]);
  });

  fs.writeFile('output.txt', text, 'utf8', (err) => {
    if (err) throw err;

    console.log('Los datos se escribieron correctamente!');
  });
  
  console.log(text);
});