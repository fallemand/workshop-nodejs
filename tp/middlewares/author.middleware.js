const authorMiddleware = (req, res, next) => {
  res.locals.author = {
    name: 'lb',
    email: 'lb@example.com'
  };

  next();
}

module.exports = authorMiddleware;
