/**
 * API Routes
 */
const router = require('express').Router();
const apiController = require('../controllers/api.controller');
const authorMiddleware = require('../middlewares/author.middleware');

router.use(authorMiddleware);

router.get('/search/:site', apiController.search);

router.get('/suggest/:site', apiController.suggest);

router.get('/items/:id', apiController.items);

module.exports = router;