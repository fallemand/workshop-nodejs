class AppController {
  static main(req, res) {
    res.send('app');
  }

  static search(req, res) {
    res.send(`search ${req.query.q}`);
  }

  static items(req, res) {
    res.send(`item ${req.params.id}`);
  }

  // static example(req, res) {
  //   res.render('index', {
  //     heading: 'Trip',
  //     subheading: 'Buenos Aires',
  //     shouldDisplaySubheading: true,
  //     tasks: [
  //       'Check-in',
  //       'Print tickets',
  //       'Buy snacks'
  //     ]
  //   });
  // }
}

module.exports = AppController;
