var express = require('express');
var router = express.Router();
var appController = require('../controllers/app.controller');

router.get('/items/:id', appController.item)
router.get('/items', appController.items)

module.exports = router;