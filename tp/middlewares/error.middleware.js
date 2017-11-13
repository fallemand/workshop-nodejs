const ErrorMiddleware = {
  apiError(err, req, res, next) {
    console.log(err);

    res.status(err.status || 500).json({ status: err.status, message: err });
  },

  appError(err, req, res, next) {
    console.log(err);

    res.status(err.status || 500).render('Error', {
      status: err.status,
      message: err.toString(),
    });
  },
};

module.exports = ErrorMiddleware;
