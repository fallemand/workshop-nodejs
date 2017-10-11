const replacer = {
	metodo1: () => {
		console.log('Metodo 1')
	},
	metodo2: function() {
		console.log('Metodo 2')
	}
}

const anotherMethod = () => {
	console.log('Otro metodo');
}

module.exports.particular = () => {
	console.log('Metodo exportado');
}

module.exports.replacer = replacer;