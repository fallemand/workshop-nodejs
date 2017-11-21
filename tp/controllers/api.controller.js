const meliService = require('../services/meli.service')

/**
 * Api controller contiene las funciones invocadas por los endpoints de api
 */
class ApiController {
  /**
   * Search invoca al meliService
   */
  static search(req, res, next) {
    const site = req.params.site;
    const q = encodeURIComponent(req.query.q);

    meliService.searchWithPromise(q, site).then((result) => {
      result.author = res.locals.author;
      res.json(result);
    }).catch(next);
  };

  /**
   * Suggest invoca al meliService
   */
  static suggest(req, res, next) {
    const site = req.params.site;
    const q = encodeURIComponent(req.query.q);

    meliService.suggestWithPromise(q, site).then((result) => {
      result.author = res.locals.author;
      res.json(result);
    }).catch(next);
  };

  /**
   * Items invoca al meliService
   */
  static items(req, res, next) {
    const itemId = req.params.id;

    meliService.itemWithPromise(itemId).then((result) => {
      result.author = res.locals.author;
      res.send(result);
    }).catch(next);
  };
}

module.exports = ApiController;
