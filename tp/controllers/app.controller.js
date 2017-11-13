const request = require('../services/requestPromise');
const config = require('../config');

class AppController {
  items(req, res, next)  {
    const item = req.params.id;
    const url = `/api/items/${item}`;
    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      hostname: config.host,
      protocol: 'http',
      port: config.port,
      path: url
    };
    request(options).then((item) => {
      res.render('Item', item);
    }).catch(next);
  };
  search(req, res, next) {
    const query = req.query.q;
    const url = `/api/sites/${req.params.site}/search?q=${encodeURIComponent(query)}`;
    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      hostname: config.host,
      protocol: 'http',
      port: config.port,
      path: url
    };
    request(options).then((results) => {
      results.query = query;

      res.render('Search', results);
    }).catch(next);
  };

  test(req, res) {
    res.render('Test', {title: 'Título', content: 'Contenido', showSubtitle: false, lista: ['hola', 'chau']});
  }

  home(req, res) {
    res.render('Index', {breadcrumb: ['Inicio', 'Ejemplo']});
  }
}

module.exports = new AppController();
