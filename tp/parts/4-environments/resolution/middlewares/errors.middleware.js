// Log error function
const logError = (err) => {
  console.error(err);
};

module.exports.apiErrors = (err, req, res, next) => {
  logError(err);
  if (err instanceof Error) {
    err = {
      status: 500,
      message: err.toString()
    };
  }
  res.status(err.status || 500).json(err);
};

module.exports.appErrors = (err, req, res, next) => {
  logError(err);
  if (err instanceof Error) {
    err = err.toString();
  }
  res.render('error', {
    error: JSON.stringify(err),
  });
};
