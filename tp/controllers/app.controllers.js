class appControllers {

    static suggest(req, res, next) {
        res.send(`Entro a /app/suggest - Query = ${JSON.stringify(req.query)}`);
    }

    static items(req, res, next) {
        res.send(`Entro a /app/items - id = ${req.params.id}`);
    }
}

module.exports = appControllers;