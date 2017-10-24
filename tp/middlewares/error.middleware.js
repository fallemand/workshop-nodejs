const logError = (err) => {
  console.log(err);
};

module.exports.api = (err, req, res, next) => {
  logError(err);
  res.status(err.status || 500).json({ error: err.toString() });
};
