const express = require('express');
const router = express.Router();
const controller = require('../controllers/app.controller');

router.get('/items/:id', controller.items);
router.get('/search', controller.search);

module.exports = router;
