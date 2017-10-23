const router = require('express').Router();
const apiController = require('../controllers/apiController');

router.get('/', apiController.root);
router.get('/items/:id', apiController.items);
router.get('/search', apiController.search);
router.get('/suggest', apiController.suggest);

module.exports = router;
