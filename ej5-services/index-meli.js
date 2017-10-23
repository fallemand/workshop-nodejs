const meliService = require('./meli.service');

meliService.item('MLA632591345');

meliService.search('iphone').then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

meliService.suggest('iph').then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
