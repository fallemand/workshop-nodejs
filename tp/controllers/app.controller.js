const meliService = require('./../services/meli.service');
const meliTransform = require('./../services/meli.transform');

module.exports.root = (req, res) => {
  res.send('Entro en nuestra app');
};

module.exports.search = (req, res, next) => {
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

module.exports.test = (req, res) => {
  res.render('Index', {
    title: 'Lista de tareas',
    subTitle: 'Acordate de hacerlas',
    showSubTitles: true,
    tasks: [
      'Lavar el auto',
      'Cortar el pasto',
      'Aprender react',
    ],
  });
};
