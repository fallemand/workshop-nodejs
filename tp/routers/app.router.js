const router = require('express').Router();
const appController = require('../controllers/app.controller');

router.get('/search/:site', appController.search);

router.get('/items/:id', appController.items);

router.get('/test', appController.test);

router.get('/index', appController.index);

module.exports = router;