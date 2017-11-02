const request = require('../services/meli.service');

class appControllers {

    static search(req, res, next) {
        const options = getOptions(`/api/search?q=${escape(req.query.q)}`);
        request(options).then(data => {
            res.render('Search', data);
        })
    }

    static suggest(req, res, next) {
        const options = getOptions(`/api/suggest?q=${escape(req.query.q)}`);
        request(options).then(data => {
            res.render('Suggest', data);
        })
    }

    static items(req, res, next) {        
        request.item(req.params.id).then(item => {
            res.render('Item', item);
        }).catch(next);
    }

    static index(req, res, next) {
        res.render('index');
    }
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

module.exports = appControllers;