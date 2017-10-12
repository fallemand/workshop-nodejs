const express = require('express');
const apiController = require('../controllers/api.controller');

const router = express.Router();

router.get('/items/:id', apiController.items);
router.get('/search', apiController.search);
router.get('/suggest', apiController.suggest);

module.exports = router;
