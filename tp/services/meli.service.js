const request = require('./request.service');
const meliTransform = require('./meli.transform');

module.exports.items = (id) => {

    return new Promise((resolve, reject) => {

        const itemOptions = {
            protocol: 'https',
            method: 'GET',
            headers: {'Content-type': 'application/json'},
            hostname: 'api.mercadolibre.com',
            path: `/items/${id}`
        };

        const descriptionOptions = {
            protocol: 'https',
            method: 'GET',
            headers: {'Content-type': 'application/json'},
            hostname: 'api.mercadolibre.com',
            path: `/items/${id}/description`
        };

        const requestItem = request(itemOptions);
        const requestDescription = request(descriptionOptions);

        Promise.all([requestItem, requestDescription]).then((data) => {

            const itemData = data[0];
            itemData.description = data[1];

            const categoriesOptions = {
                protocol: 'https',
                method: 'GET',
                headers: {'Content-type': 'application/json'},
                hostname: 'api.mercadolibre.com',
                path: `/categories/${itemData.category_id}`
            };

            request(categoriesOptions).then((categoryData) => {
                itemData.category = categoryData;
                resolve(meliTransform.item(itemData));
            }).catch((err) => {
                reject(err);
            });
        }).catch((err) => {
            reject(err);
        });
    });
};


module.exports.search = (query) => {

    const searchOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/sites/MLA/search?q=${escape(query)}`
    };

    return request(searchOptions, meliTransform.search);
};

module.exports.suggest = (query) => {
    const suggestOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/sites/MLA/autosuggest?q=${escape(query)}`
    }

    return request(suggestOptions, meliTransform.suggest);
};