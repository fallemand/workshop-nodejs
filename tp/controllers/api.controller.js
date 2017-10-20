class ApiController {
  search(req, res) {
    res.send(`Search endpoint: ${req.query.q}`);
  }

  suggest(req, res) {
    res.send(`Suggest endpoint: ${req.query.q}`);
  }

  items(req, res) {
    res.send(`Item endpoint: ${req.params.item}`);
  }

  postItem(req, res) {
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
  }
}

module.exports = new ApiController();
