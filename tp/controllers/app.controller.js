class AppController {
  search(req, res) {
    res.send(`App search: ${req.query.q}`);
  }

  items(req, res) {
    res.send(`App item: ${req.params.item}`);
  }

  test(req, res) {
    res.render('index', {
      title: 'Lista de tareas',
      subtitle: 'Acordate de hacerlas',
      sshowSubtitle: true,
      tasks: ['task 1', 'task 2', 'task 3'],
    });
  }
}

module.exports = new AppController();
