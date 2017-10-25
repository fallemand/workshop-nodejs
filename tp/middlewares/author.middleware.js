module.exports = (req, res, next) => {
  res.locals.author = {
    name: 'Ariel',
    email: 'ariel.m84@gmail.com',
  };
  next();
};
