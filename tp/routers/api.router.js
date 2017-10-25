const router = require('express').Router();
const apiController = require('./../controllers/api.controller');

router.get('/search', apiController.search);

router.get('/suggest', apiController.suggest);

router.get('/items/:id', apiController.items);

// router.get('/search', (req, res) => {
//     const query = req.query;
//     res.json({message: 'Entro a Api search'});
// });

// router.get('/suggest', (req, res) => {
//     const query = req.query;
//     res.json('Entro a Api suggest');
// });

// router.get('/items/:id', (req, res) => {
//     const params = req.params;
//     const query = req.query;
//     res.json('Entro a Api item');
// });

module.exports = router;
