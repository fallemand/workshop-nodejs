const router = require('express').Router();
const appController = require('../controllers/app.controller.js');

// App Router
router.get('/', appController.root);

router.get('/search', appController.search);

router.get('/items/:id', appController.items);

router.get('/suggest', appController.suggest);

router.get('/test', appController.test);

module.exports = router;
