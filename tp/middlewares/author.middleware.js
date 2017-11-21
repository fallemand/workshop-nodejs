/**
 * Middleware de ejemplo
 * Todo lo que pase por authorMiddleware saldrá de él con el autor
 */
const authorMiddleware = (req, res, next) => {
    console.log('Entro a author middleware');

    res.locals.author = {
        name: 'Emiliano Kohmann',
        mail: 'emikohmann@live.com'
    }

    next();
}

module.exports = authorMiddleware;