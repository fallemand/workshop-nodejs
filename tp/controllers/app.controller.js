module.exports.root = (req, res) => {
  res.send('Entro en nuestra app');
};

module.exports.search = (req, res) => {
  res.send(`Entra a search: ${req.query}`);
};

module.exports.items = (req, res) => {
  res.send(`Entra a item: ${req.params}`);
};

module.exports.suggest = (req, res) => {
  res.send(`Entra a suggest: ${req.params}`);
};
