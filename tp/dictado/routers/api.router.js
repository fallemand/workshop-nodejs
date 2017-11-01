const express = require('express');
const router = express.Router();
const controller = require('../controllers/api.controller');

router.get('/items/:id', controller.items);
router.get('/search', controller.search);
router.get('/suggest', controller.suggest)

module.exports = router;
