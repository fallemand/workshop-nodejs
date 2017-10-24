const meliService = require('./../services/meli.service');
const meliTransform = require('./../services/meli.transform');

module.exports.root = (req, res) => {
  res.send('Entró en nuestra API');
};

module.exports.search = (req, res, next) => {
  // Force syntax error
  // const x = null;
  // x.bla;
  meliService
    .search(req.query.q)
    .then((data) => {
      const parsedData = meliTransform.getParsedSearch(data);
      parsedData.author = res.locals.author;
      res.send(parsedData);
    })
    .catch(next);
};

module.exports.items = (req, res) => {
  meliService
  .item(req.params.id)
  .then((data) => {
    const parsedData = meliTransform.getParsedItem(data.category, data.item, data.description);
    parsedData.author = res.locals.author;
    res.send(parsedData);
  })
  .catch((err) => {
    res.status(err.status || 500).send(err);
  });
};

module.exports.suggest = (req, res) => {
  res.send(`Entra a suggest: ${req.params}`);
};
