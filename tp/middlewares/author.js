module.exports.author = (req, res, next) => {
  res.locals.author = 'Gonzalo E. Rodriguez Isleño';
  next();
};
