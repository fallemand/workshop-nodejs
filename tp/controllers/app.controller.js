/**
 * Created by cuanini on 10/20/17.
 */
const request = require('../servicies/requestPromise');

class appController {

  static search (req, res, next)  {
    const url = `/api/search?q=${req.query.q}`;
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

    //res.send(`Entró a la app search de `);
  };

  static items(req, res, next) {
    const url = `/api/items/${req.params.id}`;
    const options = {
      method: 'GET',
      headers: {'Content-type': 'application/json'},
      hostname: 'localhost',
      port: '3000',
      protocol: 'http',
      path: url
    };

    request(options).then((results) => {
      res.render('Item', results);
    }).catch(next);


    //res.send(`Entró a la app item ${req.params.id}`);
  };

  static test(req, res, next) {
    res.render('index-test', {
      title: 'Lista de tareas',
      subtitle: "Recordar hacerlas",
      showSubtitle: true,
      tasks: [
        'Lavar el auto',
        'Bañar el perro',
        'Cortar el pasto',
        'Aprender React'
      ]
    });
  }

  static app(req, res) {
    let bla = null;
    bla.index;
    res.render('Index');
  }
}

module.exports = appController;

