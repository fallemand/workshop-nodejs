const request = require('./request.service');

module.exports.items = (id) => {

    const itemOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/items/${id}`
    };

    return request(itemOptions);
};

module.exports.search = (query) => {

    const searchOptions = {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/sites/MLA/search?q=${query}`
    };

  return request(searchOptions);
};
