class ApiController {

    static search(req, res) {
        const query = req.query;
    
        res.send(query);
    };
    
    static suggest(req, res) {
        const query = req.query;
        
        res.send(query);
    };
    
    static items(req, res) {
        const params = req.params;
        
        res.send(params);
    };
    
    /*
    static itemsPost(req, res) {
        const params = req.params;
        
        res.send(params);
    };
    */
}

module.exports = ApiController;