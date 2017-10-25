const router = require('express').Router();
const appController = require('../controllers/app.controller');

// App Routes
router.get('/items/:id', appController.items);
router.get('/search', appController.search);

module.exports = router;
