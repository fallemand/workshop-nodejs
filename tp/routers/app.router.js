/**
 * Created by cuanini on 10/20/17.
 */

const router = require('express').Router();

const appController = require('../controllers/app.controller');

  router.get('/', appController.app);

  router.get('/search', appController.search);

  router.get('/items/:id', appController.items);

  router.get('/test', appController.test);

module.exports = router;
