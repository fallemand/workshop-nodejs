/**
 * Created by cuanini on 10/9/17.
 */
class Calculadora {

    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
     }

     sumar() {
        return this.num1 + this.num2
     }

     restar() {
        return this.num1 - this.num2
     }

     multiplicar() {
        return this.num1 * this.num2
     }

     dividir() {
        return this.num1 / this.num2
     }

     setA(num1) {
        this.num1 = num1;
        return this;
     }

     setB(num2) {
        this.num2 = num2;
        return this;
     }
}

module.exports = Calculadora;