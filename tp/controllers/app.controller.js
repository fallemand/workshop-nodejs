const meliService = require('../services/meli.service');
const request = require('../services/requestPromise');
const config = require('../config');

/**
 * App controller contiene las funciones invocadas por los endpoints de app
 */
class AppController {
  /**
   * Search hace una llamada a API y luego muestra los resultados
   */
  static search(req, res, next) {
    const site = req.params.site;
    const q = req.query.q;
    const url = `/api/search/${site}?q=${encodeURIComponent(q)}`;

    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
      hostname: config.host,
      port: config.port,
      protocol: 'http',
      path: url
    };

    request(options).then((results) => {
      results.query = q;
      res.render('Search', results);
    }).catch(next);
  };

  /**
   * Items hace una llamada a API y luego muestra los resultados
   */
  static items(req, res, next) {
    const itemId = req.params.id;

    const url = `/api/items/${itemId}`;

    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
      hostname: config.host,
      port: config.port,
      protocol: 'http',
      path: url
    };

    request(options).then((results) => {
      res.render('Item', results);
    }).catch(next);
  };
  
  /**
   * Index
   */
  static index(req, res, next) {
    res.render('Index');
  };
}

module.exports = AppController;
