// APP Controller

const request = require('../services/request.service');

module.exports.items = (req, res) => {
  res.send('Acá vamos a retornar el item: ' + req.params.id);
};

module.exports.search = (req, res, next) => {
  const query = req.query.q;
  const url = `/api/search?q=${query}`;
  const options = {
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'localhost',
    port: '3000',
    protocol: 'http',
    path: url
  };

  request(options).then((results) => {
    res.render('Search', results);
  }).catch(next);

};

module.exports.test = (req, res) => {
  res.render('test', {
    tasks: ['Lavar el Auto', 'Bañar el perro', 'Aprender React', 'Cortar el pasto'],
    enumProp: 'default'
  });
};

module.exports.index = (req, res) => {
  res.render('Index');
};
