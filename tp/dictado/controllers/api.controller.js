const meliService = require('../services/meli.service');

exports.search = (req, res, next) => {
  const query = req.query.q;
  meliService.search(query)
    .then(data => {
      data.author = res.locals.author;
      res.json(data);
    })
    .catch(next);
};

exports.items = (req, res, next) => {
  const id = req.params.id;
  meliService.item(id)
    .then(item => {
      item.author = res.locals.author;
      res.json(item);
    })
    .catch(next);
};

exports.description = (req, res, next) => {
  const id = req.params.id;
  meliService.item(id)
    .then(item => {
      item.author = res.locals.author;
      res.json(item);
    })
    .catch(next);
};

exports.suggest = (req, res, next) => {
  const query = req.query.q;
  meliService.suggest(query)
    .then(results => {
      results.author = res.locals.author;
      res.json(results);
    })
    .catch(next);
};
