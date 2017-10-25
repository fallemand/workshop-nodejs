const authorMiddleware = (req, res, next) => {
    console.log('entro al middleware');
    res.locals.author = { name: 'Agustin Brana', email: 'agustin.brana@mercadolibre.com'};
    next();
};

module.exports = authorMiddleware;
