const meliService = require('../services/meli.service');

// API Controller

module.exports.item = (req, res, next) => {
  const id = req.params.id;
  console.log('entro en item');
  meliService.item(id).then((item) => {
    console.log('entro en la promesa');
    item.author = res.locals.author;
    res.send(item);
  }).catch(next);
};

module.exports.search = (req, res) => {
  const query = req.query.q;
  meliService.search(query).then((results) => {
    results.author = res.locals.author;
    res.send(results);
  }).catch((err) => {
    res.status(err.status || 500).send(err);
  });
};

module.exports.suggest = (req, res) => {
  const query = req.query.q;
  meliService.suggest(query).then((results) => {
    results.author = res.locals.author;
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
