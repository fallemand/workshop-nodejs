module.exports.errorApi = (err, req, res, next) => {
    console.log('ENTRO AL MIDDLE ERROR');
    console.log(err);
    if (err instanceof Error) {
        err = { error: err.toString};
    }
    res.status(err.status || 500).json(err);
    next();
};

module.exports.errorApp = (err, req, res, next) => {
    // logError(err);
    if (err instanceof Error) {
        err = err.toString();
    }

    res.render('Error', { error: err });
    next();
};
