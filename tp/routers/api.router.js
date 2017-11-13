const router = require('express').Router();
const apiController = require('../controllers/api.controller');

// Api Routes
router.get('/item/:id', apiController.item);
router.post('/item/:id', apiController.itemsPost);
router.get('/search', apiController.search);
router.get('/suggest', apiController.suggest);

module.exports = router;
