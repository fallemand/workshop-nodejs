//Log error function
const logError = (err) => {
    console.error(err);
}

exports.apiErrors = (err, req, res, next) => {
    logError(err);
    res.status(err.status || 500).json({error: err});
}

exports.appErrors = (err, req, res, next) => {
    logError(err);
    res.render('error', {message : JSON.stringify(err, null, 4)});
}
