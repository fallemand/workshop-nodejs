class apiControllers {

    static search(req, res, next){
        res.json({ 'message': `Entro a /api/search - Query = ${JSON.stringify(req.query)}` })
    }

    static suggest(req, res, next){
        res.json({ 'message': `Entro a /api/suggest - Query = ${JSON.stringify(req.query)}` })
    }

    static items(req, res, next){
        res.json({ 'message': `Entro a /api/items - id = ${req.params.id}` })
    }   
}

module.exports = apiControllers;