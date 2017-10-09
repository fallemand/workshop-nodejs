/*
const fs = require('fs');
const text = fs.readFileSync('./text.txt', 'utf8');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

const result = text.replace(vowels, 'i');

fs.writeFile('outputSync.txt', result);

//Async 
console.log('inicio');
fs.readFile('./text.txt', 'utf8', (err, data) => {
    const result = text.replace(vowels, 'i');    
    fs.writeFile('outputAsync.txt', result, (err) => {
        console.log("Succes!");
    });
});
console.log('fin');
*/
/*
    Ejercicio
*/

const fs = require('fs');
const keys = require('./replaces.json');

fs.readFile('./text.txt', 'utf8', (err, data) => {
    let text = data;

    Object.keys(keys).forEach((key, val) => {
        
        text = text.replace(new RegExp(key, 'igm'), keys[key]);

        fs.writeFile('output_ej1-filesystem.txt', text, (err) => {
            if(err){
                console.log("Error to write file!!");
            }                
        });
    })
});








