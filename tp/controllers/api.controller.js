/**
 * Created by cuanini on 10/20/17.
 */
const meliTransform = require('../servicies/meli.transform');
const meliService = require('../servicies/meli.service');

class apiController {
  static search (req, res, next)  {
    //res.json({message: `Entró a la api suggest de ${req.query.q}`});
    meliTransform.search(`${req.query.q}`).then((results) => {
      results.author = res.locals.author;
      res.json(results);
    }).catch(next);
  };



  static suggest(req, res, next) {
    //res.json({message: `Entró a la api suggest de ${req.query.q}`});
    meliTransform.suggest(`${req.query.q}`).then((results) => {
      results.author = res.locals.author;
      res.json(results);
    }).catch(next);
  };

  static items(req, res, next) {
    //res.json({message: `Entró a la api item ${req.params.id}`});
    meliService.item(`${req.params.id}`).then((results) => {
      results.author = res.locals.author;
      res.json(results);
    }).catch(next);
  };
}

module.exports = apiController;
