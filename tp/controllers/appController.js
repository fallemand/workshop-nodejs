const request = require('../services/request');

class AppController {
  root (req, res) {
    res.render('Index');
  }

  items (req, res, next) {
    const options = {
      protocol: 'http',
      method: 'GET',
      port: '3000',
      headers: {'Content-type': 'application/json'},
      hostname: 'localhost',
      path: `/api/items/${req.params.id}`
    };

    request(options).then(data => res.render('Item', data)).catch(next);
  }

  search (req, res, next) {
    const options = {
      protocol: 'http',
      method: 'GET',
      port: '3000',
      headers: {'Content-type': 'application/json'},
      hostname: 'localhost',
      path: `/api/search?q=${req.query.q}`
    };

    request(options).then(data => {
      res.render('Search', data) ;
    }).catch(next);
  }
}

module.exports = new AppController ();
