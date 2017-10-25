const router = require('express').Router();
const apiController = require('../controllers/api.controller');

// Api Routes
router.get('/items/:id', apiController.item);
router.post('/items/:id', apiController.itemsPost);
router.get('/search', apiController.search);
router.get('/suggest', apiController.suggest);

module.exports = router;
