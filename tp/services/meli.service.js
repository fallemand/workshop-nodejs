const request = require('./request.service');
const meliTransform = require('./meli.transform');

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

module.exports.description = (id) => {

    const itemOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/items/${id}/description`
    };

    return request(itemOptions);
};

module.exports.search = (query) => {

    const searchOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/sites/MLA/search?q=${query}`
    };

    return request(searchOptions, meliTransform.search);
};

module.exports.suggest = (query) => {
    const suggestOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/sites/MLA/autosuggest?q=${query}`
    }

    return request(suggestOptions, meliTransform.suggest);
};