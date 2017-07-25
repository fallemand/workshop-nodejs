var express = require('express');
var router = express.Router();
var appController = require('../controllers/app.controller');

router.get('/items/:id', appController.items)
router.get('/search', appController.search)

module.exports = router;
