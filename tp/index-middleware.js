const express = require('express');
const app = express();
const router = express.Router();

const middleware = (req, res, next) => {
  console.log('Entro al middleware');
  next();
};

const middlewareError = (err, req, res, next) => {
  console.log('Entro middleware de error');
  console.log(err);
};

router.get('/foo', (req, res) => {
  res.send('Entramos a foo!');
});

router.get('/bar', (req, res) => {
  res.send('Entramos a bar!');
});

app.use(middleware);
app.use(router);
app.use(middlewareError);

app.listen('3000', 'localhost', () => {
  console.log("App listening in port 3000");
});
