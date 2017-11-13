const meliService = require('../services/meli.service');
const meliTransform = require('../services/meli.transform');

// API Controller

module.exports.item = (req, res, next) => {
  meliService.item(req.params.id)
  .then((data) => {
    let coolData = meliTransform.item(data);
    coolData.author = res.locals.author;
    res.send(coolData);
  }).catch(next);
};

module.exports.search = (req, res, next) => {
  meliService.search(req.query.q)
  .then((results) => {
    let coolData = meliTransform.search(results);
    coolData.author = res.locals.author;
    res.json(coolData);
  })
  .catch(next);
};

module.exports.suggest = (req, res) => {
  meliService.suggest(req.query.q)
  .then((results) => {
    let coolData = meliTransform.suggest(results);
    coolData.author = res.locals.author;
    res.send(coolData);
  }).catch((err) => {
    res.status(err.status || 500).send(err);
  });
};

module.exports.itemsPost = (req, res) => {
  res.json({
    message: `Aca estamos en el post!!!`,
    body: req.body
  });
};
