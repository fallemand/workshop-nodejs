const request = require('../services/request');

class AppController {
  root (req, res) {
    res.render('Index');
  }

  items (req, res) {
    res.send(req.params);
  }

  search (req, res, next) {
    const options = {
      protocol: 'http',
      method: 'GET',
      port: '3000',
      headers: {'Content-type': 'application/json'},
      hostname: 'localhost',
      path: `/api/search?q=${req.query.q}`
    };

    request(options).then(data => {
      res.render('Search', data) ;
    }).catch(err => {
      console.log("me rompi")
    });
  }
}

module.exports = new AppController ();
