class AppController {
  items(req, res)  {
    res.send(`Item ${req.params.id}`);
  };
  search(req, res) {
    res.send(`Search item ${req.query.q}`);
  };
}

module.exports = new AppController();
