const fs = require("fs");

// Sync
// console.log('inicio');
// const text = fs.readFileSync('./text.txt', 'utf8');
// const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

// const result = text.replace(vowels, 'i');
// console.log(result);

// console.log('fin');

// console.log('inicio');
// const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');
// fs.readFile('./text.txt', 'utf8', (err, data) => {
//     const result = data.replace(vowels, 'i');
//     fs.writeFile('output.txt', result, (err) => {
//         console.log('Los datos se escribieron correctamente.');
//     })
// });
// console.log('fin');

const replaces = require("./replaces.json");

fs.readFile("./text.txt", "utf8", (err, data) => {
  if (err) throw err;
  let finalText = data;

  Object.keys(replaces).forEach(word => {
    finalText = finalText.replace(new RegExp(word, "ig"), replaces[word]);
  });
  fs.writeFile("output.txt", finalText, err => {
    console.log("Los datos se escribieron correctamente.");
  });
});
