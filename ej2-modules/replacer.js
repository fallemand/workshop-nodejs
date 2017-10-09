const replacer = {
    metodo1 : () =>{
        console.log('123');
    },
    metodo2 : () =>{
        console.log('345');
    }
};

module.exports = replacer;

class myClass {
    test(){
        console.log('bla')
    }
}

module.exports = myClass;