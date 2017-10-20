// API Controller

module.exports.items = (req, res) => {
  res.json({message: `Acá vamos a retornar el item: ${req.params.id}`});
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
