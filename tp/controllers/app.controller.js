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

  static test(req, res) {
    res.render('index', {
      title: 'Lista de tareas',
      subtitle: "Recordar hacerlas",
      showSubtitle: true,
      tasks: [
        'Lavar el auto',
        'Bañar el perro',
        'Cortar el pasto',
        'Aprender React'
      ]
    });
  }
}

module.exports = appController;
