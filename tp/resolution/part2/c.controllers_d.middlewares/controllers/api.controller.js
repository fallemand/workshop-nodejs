exports.items = (req, res) => {
  res.json({
    message: `Acá vamos a retornar el item: ${req.params.id}`,
    author: res.locals.author
  });
};

exports.search = (req, res) => {
  res.json({
    message: `Acá vamos a buscar en meli: ${req.query.q}`,
    author: res.locals.author
  });
}

exports.suggest = (req, res) => {
  res.json({
    message: `Acá vamos a autocompletar: ${req.query.q}`,
    author: res.locals.author
  });
}
