const meliService = require('./meli.service');

//
// ITEM
meliService.item('MLA632591345').then((results) => {
    console.log("Request Item::::::::>\n" + results);
}).catch((err) => {
    console.log(err);
});

//
// SEARCH

// Con callback
// meliService.search('iphone', (results) => {
//     console.log(results);
// });

// Con promise
meliService.search('iphone').then((results) => {
    console.log("Search Item::::::::>\n" + results);
}).catch((err) => {
    console.log(err);
});

// meliService.suggest('iph', (results) => {
//     console.log(results);
// });
