const router = require('express').Router();
const appController = require('../controllers/app.controller');

router.get('/search/:site', appController.search);

router.get('/items/:id', appController.items);

module.exports = router;