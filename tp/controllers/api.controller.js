const meliService = require('../services/meli.service')

class ApiController {

    static search(req, res) {
        const site = req.params.site;
        const q = req.query.q;

        meliService.searchWithPromise(q, site).then((result) => {
            res.send(result);
        }).catch( (err) => {
            res.status(500).send(err)
        });
    };
    
    static suggest(req, res) {
        const site = req.params.site;
        const q = req.query.q;

        meliService.suggestWithPromise(q, site).then((result) => {
            res.send(result);
        }).catch( (err) => {
            res.status(500).send(err)
        });
    };
    
    static items(req, res) {
        const itemId = req.params.id;

        meliService.itemWithPromise(itemId).then((result) => {
            res.send(result);
        }).catch( (err) => {
            res.status(500).send(err)
        });
    };
    
    /*
    static itemsPost(req, res) {
        const params = req.params;
        res.send(params);
    };
    */
}

module.exports = ApiController;