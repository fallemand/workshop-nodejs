/**
 * Created by cuanini on 10/20/17.
 */

const router = require('express').Router();

const appController = require('../controllers/app.controller');

  router.get('/', (req, res) => {
    res.json({message: `Entró a nuestra app`});
  });

  router.get('/search', appController.search);

  router.get('/items/:id', appController.items);

module.exports = router;
