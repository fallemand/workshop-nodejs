class appControllers {

    static suggest(req, res, next) {
        res.send(`Entro a /app/suggest - Query = ${JSON.stringify(req.query)}`);
    }

    static items(req, res, next) {
        res.send(`Entro a /app/items - id = ${req.params.id}`);
    }

    static test(req, res, next) {
        res.render('index',{
            title : 'Ingresa en la barra de búsqueda el producto que estas buscando!',
            subtitle: 'Recordar!',
            showSubtitle : true,
            tasks : [
                'Comprar la coca',
                'Lavar el auto',
                'ir de compras',
                'aprender react'
            ]
        });
    }

    static index(req, res, next) {
        res.render('index');
    }
}

module.exports = appControllers;