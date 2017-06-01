var meliService = require('../services/meli.service');

exports.items = (req, res, next) => {
	var query = req.query.q;
	meliService.items(query)
		.then(data => {
            data.author = req.author;
			res.json(data);
		})
		.catch(next);
}

exports.item = (req, res, next) => {
	var id = req.params.id;
	meliService.item(id)
		.then(data => {
            data.author = req.author;
			res.json(data);
		})
		.catch(next);
}
