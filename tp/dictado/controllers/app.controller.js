// APP Controller

module.exports.items = (req, res) => {
  res.send('Acá vamos a retornar el item: ' + req.params.id);
};

module.exports.search = (req, res) => {
  res.send('Acá vamos a buscar en meli: ' + req.query.q);
};
