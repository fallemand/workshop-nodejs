const request = require('./request');

class meliService {

    static item(id, callback) {

        return new Promise((resolve, reject) => {

            const optionsItemHttps = {
                protocol: 'https',
                method: 'GET',
                headers: {'Content-type': 'application/json'},
                hostname: 'api.mercadolibre.com',
                path: `/items/${id}`
            };

            const optionsDescriptionHttps = {
                protocol: 'https',
                method: 'GET',
                headers: {'Content-type': 'application/json'},
                hostname: 'api.mercadolibre.com',
                path: `/items/${id}/description`
            };

            const requestItem = request(optionsItemHttps);

            const requestDescription = request(optionsDescriptionHttps);
            
            Promise.all([requestItem, requestDescription]).then((data) => {
                const partialData = data;
                
                const optionsCategoriesHttps = {
                    protocol: 'https',
                    method: 'GET',
                    headers: {'Content-type': 'application/json'},
                    hostname: 'api.mercadolibre.com',
                    path: `/categories/${partialData[0].category_id}`
                };

                request(optionsCategoriesHttps).then((categoryData) => {
                    partialData.push(categoryData);
                    resolve(partialData);
                }).catch((err) => {
                    reject(err);
                });
            }).catch((err) => {
                reject(err);
            });
        });
    };

    static search(query, callback) {
        const optionsSearchHttps = {
            protocol: 'https',
            method: 'GET',
            headers: {'Content-type': 'application/json'},
            hostname: 'api.mercadolibre.com',
            path: `/sites/MLA/search?q=${query}`
        };

        return request(optionsSearchHttps);
    }

    static suggest(query, callback) {
        const optionsSuggestHttps = {
            protocol: 'https',
            method: 'GET',
            headers: {'Content-type': 'application/json'},
            hostname: 'http2.mlstatic.com',
            path: `/resources/sites/MLA/autosuggest?q=${query}`
        };

        return request(optionsSuggestHttps);
    }
}

module.exports = meliService;
