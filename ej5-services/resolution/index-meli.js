const meliService = require('./meli.service');
const meliTransform = require('./meli.transform');

meliService.item('MLA632591345').then((data) => {
  data = meliTransform.item(data);
  console.log(data);
}).catch((err) => {
  console.log(err);
}); 

meliService.search('iphone').then((data) => {
  data = meliTransform.search(data);
  console.log(data);
}).catch((err) => {
  console.log(err);
});

meliService.suggest('iph').then((data) => {
  data = meliTransform.suggest(data);
  console.log(data);
}).catch((err) => {
  console.log(err);
});