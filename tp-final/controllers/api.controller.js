var meliService = require('../services/meli.service');

exports.search = (req, res, next) => {
	var query = req.query.q;
	meliService.search(query)
		.then(data => {
            data.author = req.author;
			res.json(data);
		})
		.catch(next);
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
