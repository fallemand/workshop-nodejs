class AppController {
  items(req, res)  {
    res.send(`Item ${req.params.id}`);
  };
  search(req, res) {
    res.send(`Search item ${req.query.q}`);
  };

  test(req, res) {
    res.render('Test', {title: 'Título', content: 'Contenido', showSubtitle: false, lista: ['hola', 'chau']});
  }

  home(req, res) {
    res.render('Index', {breadcrumb: ['category3qreqwe1', 'cawfewstegory2']});
  }
}

module.exports = new AppController();
