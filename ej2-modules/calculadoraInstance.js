class calculadoraInstance {

    constructor(a, b){
        this.a = a;
        this.b = b;
    }    
    sumar(){
        return this.a + this.b;
    }

     restar(){
        return this.a - this.b;
    }

     multiplicar(){
        return this.a * this.b;
    }

     dividir(){
        return this.a / this.b;
    }

    setA(a){
        this.a = a;
    }

    setB(b){
        this.b = b;
    }
}

module.exports = calculadoraInstance;