
module.exports = (req, res, next) => {    
    res.locals.author = {
        name : 'Lucas Carrizo',
        mail : 'lucas.carrizo@mercadolibre.com'
    }
    next();
};

