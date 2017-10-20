const meliService = require('./meli.service');

meliService.search('iphone').then((results) => {
  console.log(results);
}).catch((err) => {
  console.log(err);
});

// meliService.item('MLA614202014').then((results) => {
//   console.log(results);
// }).catch((err) => {
//   console.log(err);
// });

// meliService.suggest('iph').then((results) => {
//   console.log(results);
// }).catch((err) => {
//   console.log(err);
// });
