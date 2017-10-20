const service = require('./meli.service');

service.search('iphone')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// service.suggest('iph')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

service.item('MLA632591345')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
