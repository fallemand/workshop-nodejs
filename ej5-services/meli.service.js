const fs = require('fs');
const request = require('./requestPromise');

const item = (id, callback) => {

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
        path: `/items/${query}/description`
    };

    const categoryOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/categories/${query}`
    };

    return request(itemOptions);

}

const search = (query, callback) => {

    const searchOptions = {
        protocol: 'https',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'api.mercadolibre.com',
        path: `/sites/MLA/search?q=${query}`
    };


    // Con callback
    // request(searchOptions).then(data => {
    //     callback(data);
    // }).catch(err => {
    //     callback(err);
    // });

    // Con promise
    // Acá llamo directamente a request que es el modulo que estoy trayendo para aprovechar la promesa.
    return request(searchOptions);
};

// const suggest = (query, callback) => {

//     const suggestOptions = {
//         protocol: 'http',
//         method: 'GET',
//         headers: {'Content-type': 'application/json'},
//         hostname: 'http://http2.mlstatic.com',
//         path: `/resources/sites/MLA/autosuggest?q=${query}`
//     };

//     request(suggestOptions).then(data => {
//         callback(data);
//     }).catch(err => {
//         callback(err);
//     });

// };

module.exports.item = item;
module.exports.search = search;
//module.exports.suggest = suggest;