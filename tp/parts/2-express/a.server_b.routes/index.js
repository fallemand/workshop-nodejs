const express = require('express');
const app = express();
const router = express.Router();

//Define API Routes
router.get('/api/items/:id', (req, res) => {
  const id = req.params.id;
  res.json({message: `Acá retornaremos el item: ${id}`})
});
router.get('/api/search', (req, res) => {
  const query = req.query.q;
  res.json({message: `Acá buscaremos: ${query}`})
});
router.get('/api/suggest', (req, res) => {
  const query = req.query.q;
  res.json({message: `Acá sugeriremos: ${query}`})
});

//Define APP Routes
router.get('/app/items/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Acá retornaremos el item: ${id}`)
});
router.get('/app/search', (req, res) => {
  const query = req.query.q;
  res.send(`Acá buscaremos: ${query}`)
});
router.get('/app/suggest', (req, res) => {
  const query = req.query.q;
  res.send(`Acá sugeriremos: ${query}`)
});

//Use Router
app.use(router);

// Start Server
app.listen('3000', 'localhost', () => {
  console.log('app listen in port 3000');
});
