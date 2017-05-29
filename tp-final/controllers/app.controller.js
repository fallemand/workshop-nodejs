var meliService = require('../services/meli.service');

exports.items = (req, res) => {
	var query = req.query.search;
	meliService.items(query)
		.then(data => {
			res.render('search', data);
		})
		.catch(err => {
			res.render('error', err);
		});
}

exports.item = (req, res) => {
	var id = req.params.id;
	meliService.item(id)
		.then(item => {
			res.render('item', item);
		})
		.catch(err => {
			res.render('error', {message : JSON.stringify(err, null, 4)});
		})

}