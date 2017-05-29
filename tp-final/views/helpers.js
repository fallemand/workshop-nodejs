module.exports = {
	itemCondition : (condition) => {
		return (condition == 'new') ? 'Nuevo' : 'Usado';
	},
	quote : (value) => {
		return (value) ? '"' + value +'"' : '';
	},
};