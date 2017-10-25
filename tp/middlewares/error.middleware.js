const logError = (err) => {
    console.error(err);
}

module.exports.apiError = (err, req, res, next) => {
    console.log('Entro al middleware de error de api');
    logError(err);
    res.status(500).send(err);
}

module.exports.appError = (err, req, res, next) => {
    console.log('Entro al middleware de error de app');
    //TODO
    res.status(500).send(err);
}