// Log error function
const logError = (err) => {
    console.log(err);
}

module.exports.apiError = (err, req, res, next) => {
    logError(err);
    res.status(500).send('Something broke!');
    next();
}

module.exports.appError = (err, req, res, next) => {
    logError(err);
    if(err instanceof Error) {
        err = err.toString();
    }
    res.render('Error', { error: err } );
}
