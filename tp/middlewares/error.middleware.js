const ErrorMiddleware = {
  apiError(err, req, res, next) {
    res.status(err.status || 500).json({ status: err.status, message: err });
  }
};

module.exports = ErrorMiddleware;
