const router = require('express').Router();
const appController = require('../controllers/app.controllers');

/* 
    / -->> Home
*/

router.get('/', appController.index);
/* 
    /app/suggest  
*/
router.get('/suggest/', appController.suggest);
/* 
    /app/items  
*/
router.get('/items/:id', appController.items);



module.exports = router;
