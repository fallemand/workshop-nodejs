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
    
    static test(req, res, next) {
        res.render('IndexEmi', {
            title: 'Titulo!',
            tasks: [
                'task1',
                'task2',
                'task3'
            ]
            //subtitle: 'Subtitulo!'
        });
    };
        
    static index(req, res, next) {
        res.render('Index', {breadcrumb: ["Bre 1", "Bre 2", "Bre 3"]});
    };
}

module.exports = AppController;