const meliService = require('./meli.service');

// meliService.item('MLA632591345', (results) => {
//   console.log(results);
// });

// meliService.search('iphone', (results) => {
//   console.log(results)
// });
//
// meliService.suggest('iph', (results) => {
//   console.log(results)
// });

// meliService.search('iphone').then((results) => {
//     console.log(results);
// }).catch((err) => {
//   console.log(err);
// });

// meliService.suggest('iph').then((results) => {
//    console.log(results)
// });

meliService.item('MLA632591345').then((results) => {
    console.log(results);
}).catch((err) => {
  console.log(err);
});
