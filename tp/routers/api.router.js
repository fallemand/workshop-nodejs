const router = require('express').Router();
const apiController = require('../controllers/api.controller');

router.get('/search/:site', apiController.search);

router.get('/suggest/:site', apiController.suggest);

router.get('/items/:id', apiController.items);

// router.post('/items/:id', apiController.itemsPost);

module.exports = router;