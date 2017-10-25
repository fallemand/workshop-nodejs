const express = require('express');
const appController = require('../controllers/app.controller');

const router = express.Router();

router.get('/items/:id', appController.items);
router.get('/search', appController.search);

module.exports = router;
