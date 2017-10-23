class AppController {
  root (req, res) {
    res.send({message: 'app root'});
  }

  items (req, res) {
    res.send(req.params);
  }

  search (req, res) {
    res.send(req.query);
  }
}

module.exports = new AppController ();
