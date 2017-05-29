var meliService = require('../services/meli.service');

exports.items = (req, res) => {
	var query = req.query.q;
	meliService.items(query)
		.then(data => {
			res.json(data);	
		})
		.catch(err => {
			res.json(err);
		});
}

exports.item = (req, res) => {
	var id = req.params.id;
	meliService.item(id)
		.then(data => {
			res.json(data);	
		})
		.catch(err => {
			res.json(err);
		});
}