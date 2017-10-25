const service = require('../services/meli.service');

class ApiController {
  static search(req, res, next) {
    service.search(req.query.q)
      .then((data) => res.json({ data, author: res.locals.author }))
      .catch(next);
  }

  static suggest(req, res, next) {
    service.suggest(req.query.q)
      .then((data) => res.json({ data, author: res.locals.author }))
      .catch(next);
  }

  static items(req, res, next) {
    service.item(req.params.id)
      .then((data) => res.json({ data, author: res.locals.author }))
      .catch(next);
  }
}

module.exports = ApiController;
