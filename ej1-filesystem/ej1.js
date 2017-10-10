const fs = require('fs');
const replaceKeys = require('./replaces.json');
let text;

fs.readFile('./text.txt', 'utf8', (err, data) => {   
   let finalText = replaceWords(data);

    fs.writeFile('output.txt', finalText, (err) => {
        console.log('El archivo se guardó exitosamente');
    });
});


function replaceWords(text) {
    let convert = text;
    Object.keys(replaceKeys).forEach((key) => {
        convert = convert.replace(new RegExp(key, 'igm'), replaceKeys[key]); 
    });
    return convert;
}
