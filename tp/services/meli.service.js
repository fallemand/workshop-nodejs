const request = require('../rest/requestPromise');
const transform = require('../rest/meli.transform');

module.exports.search = (query) => {
    const searchOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
        hostname: 'api.mercadolibre.com',
        path: `/sites/MLA/search?q=${query}`
    }
    return request(searchOptions).then((result) => transform.search(result));    
};

module.exports.suggest = (query) => {
    const suggestOptions = {
        protocol: 'http',
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
        hostname: 'http2.mlstatic.com',
        path: `/resources/sites/MLA/autosuggest?q=${query}`
    }

    return request(suggestOptions).then((result) => transform.suggest(result));    
};

module.exports.item = (id) => {

    const promises = [];
    const itemFull = {};

    const options = {
        protocol: 'https',
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
        hostname: 'api.mercadolibre.com',
        path: `/items/${id}`
    }
    //Search items
    promises.push(request(options));

    //search description
    options.protocol = 'https';
    options.path = `/items/${id}/description`
    promises.push(request(options));

    return new Promise((resolve, reject) => {
        Promise.all(promises).then((results) => {
            const item = results[0];
            const description = results[1];
            itemFull.item = item;
            itemFull.description = description

            //search category        
            options.protocol = 'https';
            options.path = `/categories/${item.category_id}`
            request(options).then((category) => {
                itemFull.category = category
                resolve(itemFull);
                //resolve(transform.item(itemFull)); //validar los datos del VIP

            }).catch((err) => {
                reject(err);
            });

        }).catch((err) => {
            reject(err);
        });

    });

};