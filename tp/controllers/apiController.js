
class ApiController {
  root (req, res) {
    res.json({message: 'api root'});
  }

  items (req, res) {
    res.json(req.params);
  }

  search (req, res) {
    res.json(req.query);
  }

  suggest (req, res) {
    res.json(req.query);
  }
}

module.exports = new ApiController ();
