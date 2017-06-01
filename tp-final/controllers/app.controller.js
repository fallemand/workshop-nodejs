var meliService = require('../services/meli.service');

exports.items = (req, res, next) => {
	var query = req.query.search;
	meliService.items(query)
		.then(data => {
            data.author = res.locals.author;
			res.render('search', data);
		})
		.catch(next);
}

exports.item = (req, res, next) => {
	var id = req.params.id;
	meliService.item(id)
		.then(item => {
            data.author = req.author;
			res.render('item', item);
		})
		.catch(next);
}
