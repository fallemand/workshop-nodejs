const meliService = require('./meli.service');

// Search
meliService.search('iphone').then((results) => {
  console.log(results);
}).catch((err) => {
  console.log(err);
});

// Item
meliService.item('MLA614202014').then((results) => {
  console.log(results);
}).catch((err) => {
  console.log(err);
});

// Suggest
meliService.suggest('iph').then((results) => {
  console.log(results);
}).catch((err) => {
  console.log(err);
});
