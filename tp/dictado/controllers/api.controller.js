// API Controller
const meliService = require('../services/meli.service.js');

module.exports.items = (req, res) => {
  meliService.item(req.params.id).then((item) => {
    res.json(item);
  }).catch((err) => {
    res.status(err.status || 500).json(err);
  });
};

module.exports.itemsPost = (req, res) => {
  res.json({
    message: `Aca estamos en el post!!!`,
    body: req.body
  });
};

module.exports.search = (req, res) => {
  res.json({message: `Acá vamos a buscar en meli: ${req.query.q}`});
};

module.exports.suggest = (req, res) => {
  res.json({message: `Acá vamos a autocompletar: ${req.query.q}`});
};
