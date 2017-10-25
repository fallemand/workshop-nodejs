// API Controller
const meliService = require('../services/meli.service');

module.exports.items = (req, res, next) => {
    // const x = null;
    // x.bla;
    const id = req.params.id;
    meliService.items(id).then((item) => {
        item.author = res.locals.author;
        res.json(item)
    }).catch(next);
}

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
