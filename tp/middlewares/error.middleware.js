module.exports.errorApi = (err, req, res, next) => {
    console.log('ENTRO AL MIDDLE ERROR');
    console.log(err);
    if (err instanceof Error) {
        err = { error: err.toString};
    }
    res.status(err.status || 500).json(err);
};

module.exports.errorApp = (err, req, res, next) => {
    // TODO
};
