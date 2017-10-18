class Calculadora {

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sumar() {
    return this.a + this.b;
  }

  restar() {
    return this.a - this.b;
  }

  multiplicar() {
    return this.a * this.b;
  }

  dividir() {
    return this.a / this.b;
  }

  setA(a) {
    this.a = a;
    return this;
  }

  getA() {
    return this.a;
  }

  setB(b) {
    this.b = b;
    return this;
  }

  getB() {
    return this.b;
  }

  toString() {
    return `a: ${this.a} b: ${this.b}`;
  }
}


module.exports = Calculadora;

