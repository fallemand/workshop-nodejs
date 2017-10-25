const router = require('express').Router();
const appController = require('../controllers/app.controller');

/**
 * App Routes
 */

// 4: /app/search?q=iphone
router.get('/search', appController.search);

// 5: /app/items/MLA621827059
router.get('/items/:item', appController.items);

// Test react view
router.get('/test', appController.test);

module.exports = router;
