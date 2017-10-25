const authorMiddleware = (req, res, next) => {
    res.locals.author = 'Her';
    next();
}

module.exports = authorMiddleware;