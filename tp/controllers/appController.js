class AppController {
  root (req, res) {
    res.send({message: 'app root'});
  }

  items (req, res) {
    res.send(req.params);
  }

  search (req, res) {
    res.send(req.query);
  }

  test (req, res) {
    res.render('index', {
      title: "Lista de tareas",
      subtitle: "Acordate de hacerlas",
      tasks: [
        "Lavar la ropa",
        "Lavar los platos",
        "Bañarse"
      ]
    });
  }
}

module.exports = new AppController ();
