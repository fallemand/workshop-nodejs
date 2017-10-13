const meliService = require('./meli.service');

meliService.search('iphone').then((results) => {
  console.log(results);
}).catch((err) => {
  console.log(err);
});


// meliService.item('', (item) => {
//
// });
//
//
//
// meliService.suggest('iph', (results) => {
//
// });
