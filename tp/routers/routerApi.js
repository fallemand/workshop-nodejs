const router = require('express').Router();
const apiController = require('../controllers/api.controller');
// const bodyParser = require('body-parser');

// create application/json parser
// const jsonParser = bodyParser.json();

/**
 * API Routes
 */

// 1: /api/search?q=xbox
router.get('/search', apiController.search);

// 2: /api/suggest?q=iph
router.get('/suggest', apiController.suggest);

// 3: /api/items/MLA614202014
router.get('/items/:item', apiController.items);
router.post('/items/:item', jsonParser, apiController.postItem);

module.exports = router;
