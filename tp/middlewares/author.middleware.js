const authorMiddleware = (req, res, next) => {
    res.locals.author = { name: 'Agustin Brana', email: 'agustin.brana@mercadolibre.com'};
    next();
};

module.exports = authorMiddleware;
