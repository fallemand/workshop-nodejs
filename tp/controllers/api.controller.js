const meliService = require('../services/meli.service');
const Transformer = require('../services/meli.transform');

class ApiController {
  search(req, res, next) {
    meliService
      .search(req.query.q)
      .then((data) => {
        const parsedData = Transformer.search(data);
        parsedData.author = res.locals.author;
        res.send(parsedData);
      })
      .catch(next);
  }

  suggest(req, res, next) {
    meliService
      .suggest(req.query.q)
      .then((data) => {
        const parsedData = Transformer.suggest(data);
        parsedData.author = res.locals.author;
        res.send(parsedData);
      })
      .catch(next);
  }

  items(req, res, next) {
    meliService
      .item(req.params.item)
      .then((data) => {
        const parsedData = Transformer.item(data);
        parsedData.author = res.locals.author;
        res.send(parsedData);
      })
      .catch(next);
  }

  postItem(req, res) {
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
  }
}

module.exports = new ApiController();
