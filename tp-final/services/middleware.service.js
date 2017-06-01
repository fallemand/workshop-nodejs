exports.author = (req, res, next) => {
    res.locals.author = {
        'name': 'Facundo Allemand',
        'mail': 'facundo.allemand@mercadolibre.com'
    };
    next();
}

exports.apiErrors = (err, req, res, next) => {
    res.json(err);
}

exports.appErrors = (err, req, res, next) => {
    res.render('error', {message : JSON.stringify(err, null, 4)});
}
