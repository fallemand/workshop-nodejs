const router = require('express').Router();
const appController = require('../controllers/app.controller');

/**
 * App Routes
 */

// 4: /app/search?q=iphone
router.get('/search', appController.search);

// 5: /app/items/MLA621827059
router.get('/items/:item', appController.items);

// Index react view
router.get('/', appController.index);

module.exports = router;
