class AppController {
  search(req, res) {
    res.send(`App search: ${req.query.q}`);
  }

  items(req, res) {
    res.send(`App item: ${req.params.item}`);
  }
}

module.exports = new AppController();
