/**
 * Created by cuanini on 10/20/17.
 */
const router = require('express').Router();
const apiController = require('../controllers/api.controller');

  router.get('/search', apiController.search);

  router.get('/suggest', apiController.suggest);

  router.get('/items/:id', apiController.items);

  //router.post('/items/:id', apiController.itemsPost);

  module.exports = router;
