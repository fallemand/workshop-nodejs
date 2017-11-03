const router = require('express').Router();
const controller = require('../controllers/app.controller');

router.get('/', controller.main);
router.get('/search', controller.search);
router.get('/items/:id', controller.items);

module.exports = router;
