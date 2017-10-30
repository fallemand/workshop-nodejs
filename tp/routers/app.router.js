const router = require('express').Router();
const appController = require('./../controllers/app.controller');

// router.get('/search', (req, res) => {
//     const query = req.query;
//     res.send('Entro a Search');
// });
router.get('/search', appController.search);

router.get('/items/:id', appController.items);

router.get('/', appController.index);
// router.get('/items/:id', (req, res) => {
//     const params = req.params;
//     const query = req.query;
//     res.send('Entro a VIP');
// });

module.exports = router;
