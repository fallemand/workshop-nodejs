const router = require('express').Router();
const appController = require('../controllers/appController');

router.get('/', appController.root);

router.get('/items/:id', (req, res) => {
  res.send(req.params);
});

router.get('/search', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});


module.exports = router;


