const express = require('express');
const app = express();
const router = express.Router();

/**
 * Se utiliza para hacer cosas comunes a muchas rutas o llamadas
 */
const middleware1 = (req, res, next) => {
    console.log('Entro al middleware 1');
    next();
} 

const middleware2 = (req, res, next) => {
    console.log('Entro al middleware 2');
    next();
} 

const middlewareError = (err, req, res, next) => {
    console.log('Entro al middleware de error');
    res.send('Ocurrio un error: ' + err);
} 

const request = (resolve, reject) => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve();
        } else {
            reject();
        }
    });
}

router.get('/foo', middleware2, (req, res, next) => {
    console.log('Entramos a foo!');
    request().then((result) => {
        res.send('Entramos a foo!');
    }).catch(next);
});

router.get('/bar', (req, res) => {
    console.log('Entramos a bar!');
    res.send('Entramos a bar!');
});

app.listen('3000', 'localhost', () => {
    console.log('app escuchando en el puerto 3000');
});

app.use(middleware1);
app.use(router);
app.use(middlewareError);