const authorMiddleware = (req, res, next) => {
  const author = {
    name: 'Rodrigo Castro',
    email: 'rodrigo.castro@mercadolibre.com'
  };
  res.locals.author = author;
  next();
};

module.exports = authorMiddleware;
