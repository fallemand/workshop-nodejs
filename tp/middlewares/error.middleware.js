const apiError = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    next();
}

const appError = (err, req, res, next) => {
    // TODO
}

module.exports = apiError;