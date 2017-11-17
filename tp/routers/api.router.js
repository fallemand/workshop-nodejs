const router = require('express').Router();
const apiController = require('./../controllers/api.controller');

router.get('/search', apiController.search);

router.get('/suggest', apiController.suggest);

router.get('/items/:id', apiController.items);

module.exports = router;
