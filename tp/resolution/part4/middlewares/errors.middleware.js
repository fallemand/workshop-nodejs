exports.apiErrors = (err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({error: err});
}

exports.appErrors = (err, req, res, next) => {
    console.error(err);
    res.render('error', {message : JSON.stringify(err, null, 4)});
}

const logError = (err) => {

}
