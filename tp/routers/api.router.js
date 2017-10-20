const router = require('express').Router();
const controller = require('../controllers/api.controller');

router.get('/search', controller.search);
router.get('/suggest', controller.suggest);
router.get('/items/:id', controller.items);

module.exports = router;
