const fs = require('fs');
const keys = require('./replaces');

fs.readFile('./text.txt', 'utf8', (err, data) => {
  let text = data;

  Object.keys(keys).forEach((key) => {
    text = text.replace(new RegExp(key, 'igm'), keys[key]);
  });

  fs.writeFile('./text-output.txt', text);
});
