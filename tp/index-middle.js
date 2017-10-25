const express = require('express');
const app = express();
const router = express.Router();

router.get('/foo', (req, res) => {
  res.send('Entramos a foo');
});

app.listen('3000', '0.0.0.0', () => {
  console.log('app listen on 3000');
});


