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
        path: `/sites/MLA/search?q=${encodeURIComponent(query)}`
    }
    return request(searchOptions).then((result) => transform.search(result));    
};

module.exports.suggest = (query) => {    
    const suggestOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
        hostname: 'api.mercadolibre.com',
        path: `/sites/MLA/autosuggest?q=${encodeURIComponent(query)}`
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
        path: `/items/${encodeURIComponent(id)}`
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
            const description = results[1].text || results[1].plain_text;
            itemFull.item = item;
            itemFull.description = description

            //search category        
            options.protocol = 'https';
            options.path = `/categories/${encodeURIComponent(item.category_id)}`
            request(options).then((category) => {
                itemFull.category = category                
                resolve(transform.item(itemFull));

            }).catch((err) => {
                reject(err);
            });

        }).catch((err) => {
            reject(err);
        });

    });

};