const request = require('../rest/requestPromise');
const config = require('../config');

class appControllers {

    static search(req, res, next) {
        const options = getOptions(`/api/search?q=${escape(req.query.q)}`);

        request(options).then(data => {
            data.query = req.query.q;
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
        const options = getOptions(`/api/items/${escape(req.params.id)}`);
        request(options).then(item => {            
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
    hostname: config.address,
    port: config.port,
    protocol: 'http',
    path: path
  }
}

module.exports = appControllers;