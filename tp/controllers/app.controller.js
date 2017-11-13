const request = require('../services/request.service.js');
const meliTransform = require('../services/meli.transform.js');
const config = require('../config');

// APP Controller

module.exports.item = (req, res, next) => {
  const url = `/api/item/${req.params.id}`;
  const options = {
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: config.host,
    port: config.port,
    protocol: 'http',
    path: url
  };

  request(options).then((item) => {
    res.render('Vip', item);
  }).catch(next);
};

module.exports.search = (req, res, next) => {
  const query = req.query.q;
  const url = `/api/search?q=${query}`;
  const options = {
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: config.host,
    port: config.port,
    protocol: 'http',
    path: url
  };

  request(options).then((results) => {
    res.render('Search', results);
  }).catch(next);
};

module.exports.test = (req, res) => {
  res.render('test', {
    title: 'Mi primera vista en React',
    subtitle: 'Learning...',
    tasks: [
      'Estudiar React',
      'Estudiar Node',
      'Estudiar Express'
    ]
  }); // Lo provee express y permite laburar con las vistas
};


module.exports.index = (req, res) => {
  //Emular un error:
  /*let bla = null;
  bla.index;*/
  console.log('Index');
  res.render('Index');
};
