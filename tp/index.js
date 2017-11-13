const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');
const config = require('./config');

/**
 * Si no es produccion, usamos mocks
 */
if(config.useMocks) {
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
app.listen(config.port, config.host, () => {
    console.log(`App started: ${config.host}:${config.port}`);
});