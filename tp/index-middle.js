const express = require('express');

const app = express();
const router = express.Router();

const middleware = (req, res, next) => {
  console.log('Entró al middleware');
  next();
};

const middlewareError = (err, req, res, next) => {
  console.log('Entró al middleware de error');
  console.log(err);
  res.send('Ocurrió un error');
};

router.get('/foo', (req, res) => {
  const x = null;
  x.bla;
  res.send('Entramos a foo');
});

router.get('/bar', (req, res) => {
  res.send('Entramos a bar');
});

app.use(middleware);
app.use(router);
app.use(middlewareError);

// Start server
// ---------------------------------------------
app.listen('3000', 'localhost', () => {
  console.log('app listen in port 3000');
});
