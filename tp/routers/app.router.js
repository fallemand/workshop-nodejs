const router = require('express').Router();
const appController = require('../controllers/app.controller');

// App Routes
router.get('/item/:id', appController.item);
router.get('/search', appController.search);
router.get('/test', appController.test); // Primer vista en React
router.get('/', appController.index);

module.exports = router;
