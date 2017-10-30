const router = require('express').Router();
const appController = require('../controllers/app.controller');
//APP routes
router.get('/search', appController.search);

router.get('/items/:id', appController.items);

router.get('/test', appController.test);

router.get('/', appController.home);

module.exports = router;
