exports.apiErrors = (err, req, res, next) => {
    res.status(err.status || 500).json(err);
}

exports.appErrors = (err, req, res, next) => {
    res.render('error', {message : JSON.stringify(err, null, 4)});
}
