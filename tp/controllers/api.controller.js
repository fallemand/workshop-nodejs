const meliService = require('./../services/meli.service');

class apiController {
    static search(req, res, next) {
        const query = req.query.q;

        meliService.search(query).then((results) => {
            results.author = res.locals.author;
            res.json(results);
        }).catch(next);
    }

    static suggest(req, res, next) {
        const query = req.query.q;

        meliService.suggest(query).then((results) => {
            results.author = res.locals.author;
            res.json(results);
        }).catch(next);
    }

    static items(req, res, next) {
        const itemId = req.params.id;
        const query = req.query;

        meliService.item(itemId).then((item) => {
            item.author = res.locals.author;
            res.json(item);
        }).catch(next);
    }
}

module.exports = apiController;
