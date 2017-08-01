const express = require('express');
const router = express.Router();
const appController = require('../controllers/app.controller');

router.get('/items/:id', appController.items)
router.get('/search', appController.search)

module.exports = router;
