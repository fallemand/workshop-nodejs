module.exports.logError = (err, req, res, next) => {
  const date = new Date();
  console.error(`(START: ${date.getDate()})------------------------------`);
  console.error(err);
  console.error(`(END: ${date.getDate()})------------------------------`);

}

module.exports.apiError = (err, req, res, next) => {
  res.status(err.status || 500).json({error: err});
};

module.exports.appError = (err, req ,res, next) => {
  if(err instanceof Error) {
    err = err.toString();
  }

  res.render('Error', {error: err});
};
