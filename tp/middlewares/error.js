module.exports.apiError = (err, req, res, next) => {
  res.status(err.status || 500).json({error: err});
};

module.exports.appError = (err, req ,res, next) => {
  console.error(err);
};
