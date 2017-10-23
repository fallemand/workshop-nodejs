const router = require('express').Router();
const appController = require('../controllers/app.controller');

router.get('/search', appController.search);

router.get('/items/:id', appController.items);

module.exports = router;