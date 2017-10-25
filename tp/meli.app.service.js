const router = require('express').Router();
const appController = require('../controllers/app.controller');

router.get('/items/:id', (req, res) => {
    res.json(message: `Acá vamos a retornar el item: ${req.params.id}`)
});

router.get('/search/:id', (req, res) => {
    res.json(message: `Acá vamos a retornar el item: ${req.params.id}`)
});

module.exports = router.app;