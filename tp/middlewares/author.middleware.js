module.exports = (req, res, next) => {
  res.locals.author = {
    name: 'Juan Morazano',
    email: 'juan.morazano@mercadolibre.com',
  };

  next();
};
