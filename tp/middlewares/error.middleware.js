const logError = (err) => {
  console.error(err);
};

module.exports.apiError = (err, req, res, next) => {
  logError(err);
  try {
    err
  } catch (e) {
    
  }
  res.status(err.status || 500).json({error: err.toString()});
};

module.exports.appError = (err, req, res, next) => {
  logError(err);
};
