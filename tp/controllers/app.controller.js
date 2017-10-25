const meliService = require('./../services/meli.service');

class appController {
    static search(req, res) {
        const query = req.query.q;

        meliService.search(query).then((results) => {
            res.json(results);
        }).catch((err) => {
            res.status(err.status || 500).json(err);
            console.log(err);
        });
    }

    static items(req, res) {
        const itemId = req.params.id;
        const query = req.query;

        meliService.item(itemId).then((item) => {
            res.json(item);
        }).catch((err) => {
            res.status(err.status || 500).json(err);
            console.log('fallo la general:', err);
        });
    }
}

module.exports = appController;
