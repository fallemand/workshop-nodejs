const calculadora = require('./calculadoraStatic');
const calculadoraInstance = require('./calculadoraInstance');

const a = 2;
const b = 2;

console.log(`La suma de ${a} + ${b}  = ${calculadora.sumar(a, b)}`);
console.log(`La resta de ${a} - ${b} =  ${calculadora.restar(a, b)}`);
console.log(`La multiplicacion de ${a} * ${b} =  ${calculadora.multiplicar(a, b)}`);
console.log(`La division de ${a} / ${b} =  ${calculadora.dividir(a, b)}`);

const calcu = new calculadoraInstance(5, 10);
console.log(`La suma de ${calcu.a} + ${calcu.b}  = ${calcu.sumar(a, b)}`);
console.log(`La resta de ${calcu.a} - ${calcu.b} =  ${calcu.restar(a, b)}`);
console.log(`La multiplicacion de ${calcu.a} * ${calcu.b} =  ${calcu.multiplicar(a, b)}`);
console.log(`La division de ${calcu.a} / ${calcu.b} =  ${calcu.dividir(a, b)}`);


