module.exports = (req, res, next) => {
  res.locals.author = {
    'name': 'Marcos Galperin',
    'mail': 'marcos.galperin@mercadolibre.com'
  };
  next();
}
