const meliService = require('../services/meli.service');

// API Controller

module.exports.item = (req, res, next) => {
  const id = req.params.id;
  meliService.item(id).then((item) => {
    item.author = res.locals.author;
    res.send(item);
  }).catch(next);
};

module.exports.search = (req, res, next) => {
  const query = req.query.q;
  meliService.search(query).then((results) => {
    results.author = res.locals.author;
    res.send(results);
  }).catch(next);
};

module.exports.suggest = (req, res, next) => {
  const query = req.query.q;
  meliService.suggest(query).then((results) => {
    results.author = res.locals.author;
    res.send(results);
  }).catch(next);
};

module.exports.itemsPost = (req, res) => {
  res.json({
    message: `Aca estamos en el post!!!`,
    body: req.body
  });
};
