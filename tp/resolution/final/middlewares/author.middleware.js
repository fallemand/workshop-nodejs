module.exports = (req, res, next) => {
  res.locals.author = {
    name: 'Facundo Allemand',
    mail: 'facundo.allemand@mercadolibre.com',
  };
  next();
};
