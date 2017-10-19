const express = require('express');
const router = express.Router();

router.get('/items/:id', (req, res) => {
  res.json({message: `Acá vamos a retornar el item: ${req.params.id}`});
});
router.get('/search', (req, res) => {
  res.json({message: `Acá vamos a buscar en meli: ${req.query.q}`});
});
router.get('/suggest', (req, res) => {
  res.json({message: `Acá vamos a autocompletar: ${req.query.q}`});
});

module.exports = router;
