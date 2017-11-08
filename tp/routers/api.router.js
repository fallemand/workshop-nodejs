const router = require('express').Router();
const apiController = require('../controllers/api.controllers');
/* 
    /api/search
*/
router.get('/search/', apiController.search);
/* 
    /api/autosuggest  
*/
router.get('/suggest/', apiController.suggest);
/* 
    /api/items  
*/
router.get('/items/:id', apiController.items);

module.exports = router;

