const router = require('express').Router();
const appController = require('../controllers/appController');

router.get('/', (req, res) => {
  res.send('app root');
});

router.get('/items/:id', (req, res) => {
  res.send(req.params);
});

router.get('/search', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

router.get('/test', appController.test);

module.exports = router;


