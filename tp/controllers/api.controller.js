// API Controller
const meliService = require('../services/meli.service');

module.exports.items = (req, res, next) => {
    const id = req.params.id;
    meliService.items(id).then((data) => {
        data.author = res.locals.author;
        res.json(data)
    }).catch(next);
}

module.exports.itemsPost = (req, res) => {
    res.json({
    message: `Aca estamos en el post!!!`,
        body: req.body
    });
};

module.exports.search = (req, res, next) => {
    const query = req.query.q;
    meliService.search(query).then((data) => {
        data.author = res.locals.author;
        res.json(data)

    }).catch(next);
};

module.exports.suggest = (req, res, next) => {
    const query = req.query.q;
    meliService.suggest(query).then(data => {
        data.author = res.locals.author;
        res.json(data);
    })
    .catch(next);
    //res.json({message: `Acá vamos a autocompletar: ${req.query.q}`});
};
