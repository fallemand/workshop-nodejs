const request = require('../services/request.service.js');
const meliTransform = require('../services/meli.transform.js');
const config = require('../config');

function addOptions(url) {
  return {
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: config.host,
    port: config.port,
    protocol: 'http',
    path: url
  }
};

module.exports.item = (req, res, next) => {
  const opt = addOptions(`/api/item/${req.params.id}`);

  request(opt).then((item) => {
    res.render('Vip', item);
  }).catch(next);
};

module.exports.search = (req, res, next) => {
  const query = req.query.q;
  const opt = addOptions(`/api/search?q=${query}`);

  request(opt).then((results) => {
    results.query = req.query.q;
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
  res.render('Index');
};
