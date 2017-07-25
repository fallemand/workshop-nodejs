var request = require('./request.service');

var options = {
	method: 'GET',
	headers: {'Content-type': 'application/json'}
 };

 exports.item = (id) => {
    options.hostname = 'api.mercadolibre.com';
	options.path = `/items/${id}`;
	return new Promise((resolve, reject) => {
		request(options).then(item => {
			options.path = `/items/${id}/description`;
			request(options).then(response => {
				item.text = response.text;
				options.path = `/categories/${item.category_id}`;
				request(options).then(category => {
					item.path_from_root = category.path_from_root;
					resolve(item);
				})
			});
		}).catch(err => {
			reject(err);
		});
	})
}

exports.search = (query) => {
    options.hostname = 'api.mercadolibre.com';
	options.path = `/sites/MLA/search?limit=6&q=${escape(query)}`;
	return request(options);
}

exports.suggest = (query) => {
    options.hostname = 'http2.mlstatic.com';
    options.path = `/resources/sites/MLA/autosuggest?q=${escape(query)}&v=1`;
    return request(options);
}
