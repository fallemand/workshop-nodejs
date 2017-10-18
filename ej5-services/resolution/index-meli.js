const meliService = require('../resolution/meli.service');

//*** VIP with callback ***
meliService.item('MLA632591345', (item) => {
  console.log("*** VIP with callback ***");
  console.log(item);
});

//*** Item Search with callback ***
meliService.search('iphone', 'MLA', (results) => {
  console.log("*** Item Search with callback ***");
  console.log(results);
});

//*** Item suggestion with callback ***
meliService.suggest('iph', 'MLA', (results) => {
  console.log("*** Item suggestion with callback ***");
  console.log(results);
});

//*** VIP with promise ***
meliService.itemWithPromise('MLA632591345').then((data) => {
  console.log("*** VIP with promise ***");
  console.log(data);
}).catch((err) => {
  console.log(err);
});

//*** Item Search with promise ***
meliService.searchWithPromise('iphone', 'MLA').then((data) => {
  console.log("*** Item Search with promise ***");
  console.log(data);
}).catch((err) => {
  console.log(err);
});

//*** Item suggestion with promise ***
meliService.suggestWithPromise('iphone', 'MLA').then((data) => {
  console.log("*** Item suggestion with promise ***");
  console.log(data);
}).catch((err) => {
  console.log(err);
});
