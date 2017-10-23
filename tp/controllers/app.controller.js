/**
 * Created by cuanini on 10/20/17.
 */

class appController {
  static search (req, res)  {
    res.send(`Entró a la app search de ${req.query.q}`);
  };

  static items(req, res) {
    res.send(`Entró a la app item ${req.params.id}`);
  };
}

module.exports = appController;
