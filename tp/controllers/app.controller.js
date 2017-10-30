// APP Controller

const request = require('../services/request.service')

module.exports.items = (req, res) => {
  res.send('Acá vamos a retornar el item: ' + req.params.id);
};

module.exports.search = (req, res) => {
    // const.query = req.query.q;
    // const url = /api/search?q${query}`;
  res.send('Acá vamos a buscar en meli: ' + req.query.q);
};

module.exports.test = (req, res) => {
    res.render('index', {
        title: 'Titulo de ejemplo'
    });
};

module.exports.index = (req, res) => {
    fruta = null;
    fruta.algo();
    res.render('Index');
};