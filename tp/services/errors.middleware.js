exports.apiErrors = (err, req, res, next) => {
    res.json(err);
}

exports.appErrors = (err, req, res, next) => {
    res.render('error', {message : JSON.stringify(err, null, 4)});
}
