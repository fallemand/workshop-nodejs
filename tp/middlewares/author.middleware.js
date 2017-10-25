module.exports = (req, res, next) => {
  res.locals.author = {
    name: 'Jess',
    mail: 'jess@ml.com'
  };
  next();
};
