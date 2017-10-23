/**
 * Created by cuanini on 10/20/17.
 */

class apiController {
  static search (req, res)  {
    res.json({message: `Entró a la api suggest de ${req.query.q}`});
  };

  static suggest(req, res) {
    res.json({message: `Entró a la api suggest de ${req.query.q}`});
  };

  static items(req, res) {
    res.json({message: `Entró a la api item ${req.params.id}`});
  };
}

module.exports = apiController;
