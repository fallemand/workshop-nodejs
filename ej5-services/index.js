const MeliService = require('./meli.service');
const Transformer = require('./meli.transform');

MeliService.item('MLA636982379')
  .then((data) => {
    const itemInfo = Transformer.item(data);
    console.log('Filtered Item', itemInfo);
  })
  .catch((err) => {
    console.log(err);
  });

MeliService.search('iphone7')
  .then((data) => {
    let productos = Transformer.search(data);
    console.log('Filtered Products', productos);
  })
  .catch((err) => {
    console.log(err);
  });

MeliService.suggest('iph')
  .then((data) => {
    const suggestion = Transformer.suggest(data);
    console.log('Filtered Suggestion', suggestion);
  })
  .catch((err) => {
    console.log(err);
  });
