const calculadora = require('./calculadora');
const a = 2;
const b = 2;

console.log(`La suma de ${a} + ${b}  = ${calculadora.sumar(a, b)}`);
console.log(`La resta de ${a} - ${b} =  ${calculadora.restar(a, b)}`);
console.log(`La multiplicacion de ${a} * ${b} =  ${calculadora.multiplicar(a, b)}`);
console.log(`La division de ${a} / ${b} =  ${calculadora.dividir(a, b)}`);