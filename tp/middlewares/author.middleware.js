module.exports = (req, res, next) => {
  res.locals.author = {
    name: 'Jess Pedernera',
    mail: 'jessica.pedernera@mercadolibre.com'
  };
  next();
};
