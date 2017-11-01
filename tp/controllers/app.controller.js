// APP Controller

const request = require('../services/request.service.js');

module.exports.items = (req, res) => {
  res.render('Vip', {id: req.params.id});
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
    //res.json(results);
    res.render('Search', results); //results es mi this.props
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
