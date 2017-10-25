const express = require('express');
const app = express();
const router = express.Router();

const middleware1 = (req, resp, next) => {
    console.log('Entro al middleware1');
    res.locals.version = 'v1';
    next();
};

const middleware2 = (req, resp, next) => {
    console.log('Entro al middleware2');
    next();
};

const middlewareError = (err, req, res, next) => {
    console.log('entro al middleware de error');
    console.log(err);
    res.send('Ocurrio un error: ' + err);
};

router.get('/foo', (req, res) => {
    res.send('entramos a foo');
});

router.get('/bar', middleware2, (req, res) => { // middleware al pegar a la url
    res.send('entramos a bar');
});

app.use(middleware1);
app.use(router);
app.use(middlewareError);

app.listen('3000', 'localhost', () => {
    console.log('app escuchando en el puerto 3000');
});
