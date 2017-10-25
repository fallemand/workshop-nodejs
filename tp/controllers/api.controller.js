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
            console.log(results);
        }).catch(next);
    }

    static items(req, res, next) {
        const itemId = req.params.id;
        const query = req.query;

        meliService.item(itemId).then((item) => {
            console.log('este es el autor', res.locals.author);
            item[0].author = res.locals.author; // remover [0] cuando esté el transform
            res.json(item);
        }).catch(next);
    }
}

module.exports = apiController;
