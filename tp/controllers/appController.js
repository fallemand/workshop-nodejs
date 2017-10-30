class AppController {
  root (req, res) {
    res.render('index');
  }

  items (req, res) {
    res.send(req.params);
  }

  search (req, res) {
    res.send(req.query);
  }

}

module.exports = new AppController ();
