const express = require('express');
const router = express.Router();

router.get('/items/:id', (req, res) => {
  res.send('Acá vamos a retornar el item: ' + req.params.id);
});
router.get('/search', (req, res) => {
  res.send('Acá vamos a buscar en meli: ' + req.query.q);
});

module.exports = router;
