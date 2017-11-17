const meliService = require('./../services/meli.service');
const request = require('./../services/request');
const config = require('./../config');

class appController {
    static search(req, res, next) {
        const query = req.query.q;
        const encodedQuery = encodeURIComponent(query);
        const url = `/api/search?q=${encodedQuery}`;
        const options = {
            protocol: 'http',
            method: 'GET',
            headers: {'Content-type': 'application/json'},
            hostname: config.host,
            port: config.port,
            path: url
        }

        request(options).then((results) => {
            res.render('Search', results);
        }).catch(next);
    }

    static items(req, res, next) {
        const itemId = req.params.id;

        const url = `/api/items/${itemId}`;
        const options = {
            protocol: 'http',
            method: 'GET',
            headers: {'Content-type': 'application/json'},
            hostname: config.host,
            port: config.port,
            path: url
        }

        request(options).then((item) => {
            res.render('Item', item);
        }).catch(next);
    }

    static index(req, res) {
        res.render('Index');
    }
}

module.exports = appController;
