const meliService = require('../services/meli.service')

class AppController {
    
    static search(req, res, next) {
        const site = req.params.site;
        const q = req.query.q;

        meliService.searchWithPromise(q, site).then((result) => {
            res.send(result);
        }).catch(next);
    };
    
    static items(req, res, next) {
        const itemId = req.params.id;

        meliService.itemWithPromise(itemId).then((result) => {
            res.send(result);
        }).catch(next);
    };
}

module.exports = AppController;