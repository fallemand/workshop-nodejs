class AppController {
  static main(req, res) {
    res.send('app');
  }

  static search(req, res) {
    res.send(`search ${req.query.q}`);
  }

  static items(req, res) {
    res.send(`item ${req.params.id}`);
  }
}

module.exports = AppController;
