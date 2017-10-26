const router = require('express').Router();
const apiController = require('../controllers/api.controller');
//API routes
router.get('/sites/:site/search', apiController.search);

router.get('/sites/:site/suggest', apiController.suggest);

router.get('/items/:id', apiController.items);


module.exports = router;
