const request = require('../services/request');
const config = require('../config');

const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
  hostname: config.host,
  port: config.port,
  path: '',
};
const protocol = 'http';

class AppController {
  static main(req, res, next) {
    res.render('Index');
  }

  static search(req, res, next) {
    options.path = `/api/search?q=${req.query.q}`;

    request(options, protocol)
      .then((results) => {
        const data = results;

        data.query = req.query.q;

        res.render('Search', results);
      })
      .catch(next);
  }

  static items(req, res, next) {
    options.path = `/api/items/${req.params.id}`;

    request(options, protocol)
      .then((item) => res.render('Item', item))
      .catch(next);
  }
}

module.exports = AppController;
