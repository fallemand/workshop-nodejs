var express = require('express');
var router = express.Router();
var apiController = require('../controllers/api.controller');

router.get('/items/:id', apiController.items)
router.get('/search', apiController.search)

module.exports = router;
