const request = require('../services/request');
const config = require('../config');

class AppController {
  root (req, res) {
    res.render('Index');
  }

  items (req, res, next) {
    const options = {
      protocol: 'http',
      method: 'GET',
      port: config.port,
      headers: {'Content-type': 'application/json'},
      hostname: config.host,
      path: `/api/items/${req.params.id}`
    };

    request(options).then(data => res.render('Item', data)).catch(next);
  }

  search (req, res, next) {
    const options = {
      protocol: 'http',
      method: 'GET',
      port: config.port,
      headers: {'Content-type': 'application/json'},
      hostname: config.host,
      path: `/api/search?q=${req.query.q}`
    };

    request(options).then(data => {
      res.render('Search', data) ;
    }).catch(next);
  }
}

module.exports = new AppController ();
