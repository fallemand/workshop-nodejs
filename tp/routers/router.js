const assetsPath = require('express').static;
const apiRouter = require('./api.router');
const appRouter = require('./app.router');
const authorMiddleware = require('./../middlewares/author.middleware');
const errorMiddleware = require('./../middlewares/error.middleware');

module.exports.init = (app, path) => {
    app.use('/api', authorMiddleware, apiRouter, errorMiddleware.errorApi);

    app.use('/app', appRouter);

    // Set static path
    app.use('/assets', assetsPath(`${path}/assets`));

    // Set default route
    app.use('*', (req, res, next) => {
        console.log('ruta no valida 404');
    });
}
