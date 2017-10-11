const replacer = {
    metodo1 : () => {
        console.log('Metodo 1')
    },
    metodo2 : function() {
        console.log('Metodo 2')
    }
}

const otroMetodo = () => {
    console.log('Otro metodo');
}

//module.exports = replacer;

module.exports.particular = () => {
    console.log('Metodo exportado');
}

module.exports.elMetodo1 = replacer.metodo1;
module.exports.elOtroMetodo = otroMetodo;