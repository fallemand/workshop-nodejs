const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');

/**
 * Si no es produccion, usamos mocks
 */
if(process.env.NODE_ENV !== 'production') {
    console.log('----Using mocks----');
    require('./mocks');
}

router.init(app, __dirname);

/**
 * Inicializamos las vistas
 */
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

/**
 * App escuchando en el puerto 3000
 */
app.listen('3000', 'localhost', () => {
    console.log('App listen in port 3000');
});