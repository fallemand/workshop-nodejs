/**
 * Created by cuanini on 10/20/17.
 */
const meliTransform = require('../servicies/meli.transform');
const meliService = require('../servicies/meli.service');

class apiController {
  static search (req, res)  {
    //res.json({message: `Entró a la api suggest de ${req.query.q}`});
    meliTransform.search(`${req.query.q}`).then((results) => {
      results.author = res.locals.author;
      res.json(results);
    }).catch((err) => {
      res.json({error: err});
    });
  };



  static suggest(req, res) {
    //res.json({message: `Entró a la api suggest de ${req.query.q}`});
    meliTransform.suggest(`${req.query.q}`).then((results) => {
      results.author = res.locals.author;
      res.json(results);
    }).catch((err) => {
      res.json({error: err});
    });
  };

  static items(req, res) {
    //res.json({message: `Entró a la api item ${req.params.id}`});
    meliService.item(`${req.params.id}`).then((results) => {
      results.author = res.locals.author;
      res.json(results);
    }).catch((err) => {
      res.status(err.status || 500).json(err);
    });
  };
}

module.exports = apiController;
