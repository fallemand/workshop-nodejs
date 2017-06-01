var meliService = require('../services/meli.service');

exports.search = (req, res, next) => {
	throw Error('test');
}

exports.items = (req, res, next) => {
	var id = req.params.id;
	meliService.item(id)
		.then(item => {
            item.author = req.author;
			res.json(item);
		})
		.catch(next);
}
