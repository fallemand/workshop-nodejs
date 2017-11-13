const request = require('../services/requestPromise');
const config = require('../config');

class AppController {
  search(req, res, next) {
    const query = req.query.q;
    const url = `/api/search?q=${query}`;
    const optionsHttp = {
      protocol: 'http',
      port: config.port,
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      hostname: config.host,
      path: url,
    };

    request(optionsHttp)
      .then((results) => {
        res.render('search', JSON.parse(results));
      })
      .catch(next);
  }

  items(req, res, next) {
    // res.send(`App item: ${req.params.item}`);
    const { item } = req.params;
    const url = `/api/items/${item}`;
    const optionsHttp = {
      protocol: 'http',
      port: config.port,
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      hostname: config.host,
      path: url,
    };

    request(optionsHttp)
      .then((result) => {
        res.render('item', JSON.parse(result));
      })
      .catch(next);
  }

  index(req, res) {
    res.render('index');
  }
}

module.exports = new AppController();
