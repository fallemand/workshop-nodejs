const calculadora = require('./calculadoraStatic');
const calculadoraInstance = require('./calculadoraInstance');

const a = 2;
const b = 2;

console.log(`La suma de ${a} + ${b}  = ${calculadora.sumar(a, b)}`);
console.log(`La resta de ${a} - ${b} =  ${calculadora.restar(a, b)}`);
console.log(`La multiplicacion de ${a} * ${b} =  ${calculadora.multiplicar(a, b)}`);
console.log(`La division de ${a} / ${b} =  ${calculadora.dividir(a, b)}`);

const calcu = new calculadoraInstance(5, 10);
console.log(`La suma de ${calcu.getA()} + ${calcu.getB()}  = ${calcu.sumar()}`);
console.log(`La resta de ${calcu.getA()} - ${calcu.getB()} =  ${calcu.restar()}`);
console.log(`La multiplicacion de ${calcu.getA()} * ${calcu.getB()} =  ${calcu.multiplicar()}`);
console.log(`La division de ${calcu.getA()} / ${calcu.getB()} =  ${calcu.dividir()}`);


console.log(`La suma de ${calcu.getA()} + ${calcu.getB()}  = ${calcu.setA(10).setB(20).sumar()}`);



