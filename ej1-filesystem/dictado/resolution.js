const fs = require('fs');
const replace = require('./replaces');

const text = fs.readFile(__dirname + '/text.txt', 'utf8', (err, data) => {
  let finalText = data;
  Object.keys(replace).forEach(key => {
    finalText = finalText.replace(new RegExp(key, 'ig'), replace[key]);
  });
  fs.writeFile(__dirname + '/async.txt', finalText);
  console.log(finalText);
});




// let finalText = data;
// Object.keys(replace).forEach(key => {
//   finalText = finalText.replace(new RegExp(key, 'ig'), replace[key]);
// });
// fs.writeFile(__dirname + '/async.txt', finalText);
// console.log(finalText);
