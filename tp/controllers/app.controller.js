// APP Controller

const request = require('../services/request.service')

module.exports.items = (req, res, next) => {
    const url = `/api/items/` + req.params.id;
    const options = {
        protocol: 'http',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'localhost',
        port: 3333,
        path: url
    }
    request(options).then(data => {
        res.render('Item', data);
    })
    .catch(next);
};

module.exports.search = (req, res, next) => {
    const query = req.query.q;
    const url = `/api/search?q=${escape(query)}`;
    const options = {
        protocol: 'http',
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: 'localhost',
        port: 3333,
        path: url
    };

    request(options).then(data => {
        res.render('Search', data);
    })
    .catch(next);
};

module.exports.test = (req, res) => {
    res.render('index', {
        title: 'Titulo de ejemplo'
    });
};

module.exports.index = (req, res) => {
    res.render('Index');
};
