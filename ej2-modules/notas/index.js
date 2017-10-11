const replacer = require('./replacer_const').replacer;
const particular = require('./replacer_const').particular;

particular();

replacer.metodo1();
replacer.metodo2();

console.log(replacer);
console.log(replacer.metodo1);
console.log(replacer.metodo2);

// const claseReplacer = require('./replacer_class.js');
// console.log(claseReplacer.replaceVowels);