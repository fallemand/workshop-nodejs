/**
 * Created by cuanini on 10/23/17.
 */
const express = require('express');
const app = express();
const router = express.Router();

const middleware = (req, res, next) => {
  console.log("entro al middleware");
  next();
};

const middlewareError = (err, req, res, next) => {
  console.log('entró al middleware error');
  console.log(err);
  res.send(`Ocurrió un error ${err}`);
};

router.get('/foo', (req, res, next) => {
  console.log("entramos a foo");
  request().then((data) => {
    res.send(data);
  }).catch(next);
});

const request = () => {
  return new Promise((resolve, reject) => {
    if(false) {
      resolve('bien');
    } else {
      reject('mal');
    }
  })
}

router.get('/bar', (req, res) => {
  res.send("entramos a bar");
});

app.use(middleware);
app.use(router);
app.use(middlewareError);

app.listen('3000', 'localhost', () => {
  console.log('app escuchando en el puerto 3000');
});


