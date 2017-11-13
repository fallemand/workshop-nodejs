const meliService = require('../services/meli.service')

/**
 * Api controller contiene las funciones invocadas por los endpoints de api
 */
class ApiController {

  static search(req, res, next) {
    const site = req.params.site;
    const q = encodeURIComponent(req.query.q);

    meliService.searchWithPromise(q, site).then((result) => {
      result.author = res.locals.author;
      res.json(result);
    }).catch(next);
  };

  static suggest(req, res, next) {
    const site = req.params.site;
    const q = encodeURIComponent(req.query.q);

    meliService.suggestWithPromise(q, site).then((result) => {
      result.author = res.locals.author;
      res.json(result);
    }).catch(next);
  };

  static items(req, res, next) {
    const itemId = req.params.id;

    meliService.itemWithPromise(itemId).then((result) => {
      result.author = res.locals.author;
      res.send(result);
    }).catch(next);
  };
}

module.exports = ApiController;
