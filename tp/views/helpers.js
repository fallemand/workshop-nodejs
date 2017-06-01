module.exports = {
	itemCondition : (condition) => {
		return (condition == 'new') ? 'Nuevo' : 'Usado';
	},
	quote : (value) => {
		return (value) ? '"' + value +'"' : '';
	},
    price : (price) => {
        return price;
    },
};
