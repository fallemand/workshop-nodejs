const meliService = require('../services/transform.service');

class ApiController {
  root (req, res) {
    res.json({message: 'api root'});
  }

  items (req, res, next) {
    console.log(req.params.id);
    meliService.item(req.params.id).then((data) => {
      data.author = res.locals.author;
      res.json(data);
    }).catch(next);
  }

  search (req, res, next) {
    meliService.search(req.query.q).then((data) => {
      data.author = res.locals.author;
      res.json(data);
    }).catch(next);
  }

  suggest (req, res, next) {
    meliService.search(req.query.q).then( (data) => {
      data.author = res.locals.author;
      res.json(data);
    }).catch(next);
  }
}

module.exports = new ApiController ();
