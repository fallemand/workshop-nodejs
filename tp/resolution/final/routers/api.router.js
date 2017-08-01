const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.controller');

router.get('/items/:id', apiController.items)
router.get('/search', apiController.search)
router.get('/suggest', apiController.suggest)

module.exports = router;
