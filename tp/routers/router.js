const routerApi = require('./api.router');
const routerApp = require('./app.router');
const serverAssets = require('express').static;
const errorMiddleware = require('../middlewares/error.middleware');

/**
 * Si necesitaramos 2 elementos del mismo require podríamos hacer
 * const {Router, static} = require('express');
 */
module.exports.init = (app, path) => {
    /**
     * Delegamos los enpoints que entren por /api y /app a routers específicos
     * También seteamos los middlewares de error
     */
    app.use('/api', routerApi, errorMiddleware.apiError);
    app.use('/app', routerApp, errorMiddleware.appError);
    
    /**
     * Disponibilizamos la carpeta assets pública para que pueda ser accedida desde el cliente
     */
    app.use('/assets', serverAssets(`${path}/assets`));
    
    /**
     * Seteamos una ruta por defecto, aquí podríamos responder por ej. 404
     */
    app.use('*', (req, res, next) => {
        res.redirect('/app');
    });
};