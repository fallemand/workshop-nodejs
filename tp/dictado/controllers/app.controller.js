// APP Controller

module.exports.items = (req, res) => {
  // let x = null;
  // x.bla = 2;
  res.send('Acá vamos a retornar el item: ' + req.params.id);
};

module.exports.search = (req, res) => {
  res.send('Acá vamos a buscar en meli: ' + req.query.q);
};

module.exports.test = (req, res) => {
  res.render('test', {
    tasks: ['Lavar el Auto', 'Bañar el perro', 'Aprender React', 'Cortar el pasto'],
    enumProp: 'default'
  });
};

module.exports.index = (req, res) => {
  res.render('index');
};
