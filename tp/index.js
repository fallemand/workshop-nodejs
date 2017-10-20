const express = require('express');
const app = express();
const router = express.Router();
const route = require('./routers/router');

route.init(app, __dirname);

router.get('/', (req, res) => {
  res.send('Dentro de la app');
});

app.listen('3000', 'localhost', () => {
  console.log('Server started at port 3000');
});
