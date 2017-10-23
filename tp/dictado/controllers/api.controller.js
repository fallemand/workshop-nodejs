const meliService = require('../services/meli.service');

// API Controller

module.exports.item = (req, res) => {
  const id = req.params.id;
  meliService.item(id).then((item) => {
    res.send(item);
  }).catch((err) => {
    res.status(err.status || 500).send(err);
  });
};

module.exports.search = (req, res) => {
  const query = req.query.q;
  meliService.search(query).then((results) => {
    res.send(results);
  }).catch((err) => {
    res.status(err.status || 500).send(err);
  });
};

module.exports.suggest = (req, res) => {
  const query = req.query.q;
  meliService.suggest(query).then((results) => {
    res.send(results);
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
