exports.items = (req, res) => {
    res.send(`Acá vamos a retornar el item: ${req.params.id}`);
};

exports.search = (req, res) => {
    res.send(`Acá vamos a buscar en meli: ${req.query.q}`);
};
