const router = require('express').Router();
const apiController = require('../controllers/api.controller');
const authorMiddleware = require('../middlewares/author.middleware');
const errorMiddleware = require('../middlewares/error.middleware');

// Api Routes
router.use(authorMiddleware);
router.get('/items/:id', apiController.items);
router.post('/items/:id', apiController.itemsPost);
router.get('/search', apiController.search);
router.get('/suggest', apiController.suggest);
router.use(errorMiddleware.apiError);

module.exports = router;
