const router = require('express').Router();

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

module.exports = router;


