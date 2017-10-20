class ApiController {
  static search(req, res) {
    res.json({ data: `search ${req.query.q}` });
  }

  static suggest(req, res) {
    res.json({ data: `suggest ${req.query.q}` });
  }

  static items(req, res) {
    res.json({ data: `item ${req.params.id}` });
  }
}

module.exports = ApiController;
