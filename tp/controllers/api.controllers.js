const meliService = require('../services/meli.service');

class apiControllers {

    static search(req, res, next) {
        meliService.search(req.query.q).then((results) => {
            results.author = res.locals.author;
            res.send(results);
        }).catch(next);
    }

    static suggest(req, res, next) {
        meliService.suggest(req.query.q).then((results) => {
            results.author = res.locals.author;
            res.send(results);
        }).catch(next);
    }

    static items(req, res, next) {
        meliService.item(req.params.id).then((results) => {
            results.author = res.locals.author;
            res.send(results);
        }).catch(next);
    }
}

module.exports = apiControllers;