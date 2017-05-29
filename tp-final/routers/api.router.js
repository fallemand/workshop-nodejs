var express = require('express');
var router = express.Router();
var apiController = require('../controllers/api.controller');

router.get('/items/:id', apiController.item)
router.get('/items', apiController.items)

module.exports = router;