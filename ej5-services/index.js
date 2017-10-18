const meliService = require('./meli.service');

meliService.item('MLA352542').then((item) => {
    console.log(item);
}).catch((err) => {
    console.log('fallo la general:', err);
});

meliService.search('iphone').then((results) => {
    console.log(results);
}).catch((err) => {
    console.log(err);
});

meliService.suggest('iph').then((results) => {
    console.log(results);
}).catch((err) => {
    console.log(err);
});
