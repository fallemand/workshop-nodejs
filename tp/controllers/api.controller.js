const meliService = require('../services/meli.transform');
class ApiController {
  items(req, res, next)  {
    meliService.itemWithPromise(req.params.id).then((item) => {
      item.author = res.locals.author;
      res.json(item);
    }).catch(next);
  };
  search(req, res, next) {
    meliService.searchWithPromise(req.query.q, req.params.site).then((items) => {
      items.author = res.locals.author;
      res.json(items);
    }).catch(next);
  };
  suggest(req, res, next) {
    meliService.suggestWithPromise(req.query.q, req.params.site).then((suggestions) => {
      suggestions.author = res.locals.author;
      res.json(suggestions);
    }).catch(next);
  }
}

module.exports = new ApiController();
