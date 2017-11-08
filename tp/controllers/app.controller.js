const meliService = require('./../services/meli.service');
const meliTransform = require('./../services/meli.transform');

module.exports.root = (req, res) => {
  res.render('Index');
};

module.exports.search = (req, res, next) => {
  meliService
    .search(req.query.q)
    .then((data) => {
      const parsedData = meliTransform.getParsedSearch(data);
      parsedData.author = res.locals.author;
      res.render('Search', {
        title: 'Resultados de búsqueda',
        searchResults: parsedData,
        query: req.query.q,
      });
    })
    .catch(next);
};

module.exports.items = (req, res, next) => {
  meliService
  .item(req.params.id)
  .then((data) => {
    const parsedData = meliTransform.getParsedItem(data.category, data.item, data.description);
    parsedData.author = res.locals.author;
    res.render('Item', {
      title: 'Detalle del item',
      itemDetails: parsedData,
    });
  })
  .catch(next);
};

module.exports.suggest = (req, res) => {
  res.send(`Entra a suggest: ${req.params}`);
};
