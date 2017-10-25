const express = require('express');
const app = express();
const router = express.Router();

const middleware1 = (req, res, next) => {
  console.log('Entro al middleware1');
  next();
};

const middleware2 = (req, res, next) => {
  console.log('Entro al middleware2');
  next();
};

const middleware3 = (req, res, next) => {
  console.log('Entro al middleware3');
  next();
};

const middlewareError = (err, req, res, next) => {
  console.log('entro middleware error');
  console.log(err);
  res.send('Ocurrion un error: ' + err);
};

const request = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Todo joya pa');
    }
    else {
      reject('Todo mal');
    }
  })
};

app.get('/foo', (req, res, next) => {
  console.log('Entro a foo');
  request().then((data) => {
    data.version = res.locals.version;
    res.send(data);
  }).catch(next);
});

app.get('/bar', (req, res) => {
  console.log('Entro a bar');
  res.send('Entramos a bar!');
});

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.use(router);
app.use(middlewareError);

app.listen('3000', 'localhost', () => {
  console.log('app escuchando en el puerto 3000');
});
