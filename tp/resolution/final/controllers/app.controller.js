const request = require('../services/request.service');

exports.search = (req, res, next) => {
    const options = getOptions(`/api/search?q=${escape(req.query.q)}`)
    request(options).then(data => {
        res.render('search', data);
    })
    .catch(next);
}

exports.items = (req, res, next) => {
    const options = getOptions('/api/items/' + req.params.id)
    request(options).then(item => {
        res.render('item', item);
    })
    .catch(next);
}

function getOptions(path) {
    return {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        hostname: global.address,
        port: global.port,
        protocol: 'http',
        path: path
    }
}
