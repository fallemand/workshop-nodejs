const meliService = require('./../services/meli.service');
const request = require('./../services/request');
const config = require('./../config');

class appController {
    static search(req, res, next) {
        const query = req.query.q;

        const url = `/api/search?q=${query}`;
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

        // meliService.search(query).then((results) => {
        //     res.json(results);
        // }).catch((err) => {
        //     res.status(err.status || 500).json(err);
        //     console.log(err);
        // });
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

        // meliService.item(itemId).then((item) => {
        //     res.json(item);
        // }).catch((err) => {
        //     res.status(err.status || 500).json(err);
        //     console.log('fallo la general:', err);
        // });
    }

    static index(req, res) {
        res.render('Index');
    }
}

module.exports = appController;
