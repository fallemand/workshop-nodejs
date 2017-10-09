const fs = require('fs');
const text = fs.readFileSync('./text.txt', 'utf8');
const replaces = require('./replaces.json');


// Async
console.log('inicio');
fs.readFile('./text.txt','utf8', (err, data) => {
    let parsedText = data;
    
    Object.keys(replaces).forEach(function(currentKey) {
        const regReplace = currentKey;
        const wordToReplace = new RegExp(regReplace, 'ig');
        parsedText = parsedText.replace(wordToReplace, replaces[currentKey]);
    });
    console.log(parsedText);
    
    fs.writeFile('./output-async.txt', parsedText, (err) => {
        if (err) {
            console.log('Unable to read file');
        }
    });
})
