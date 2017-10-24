const meliService = require('./meli.service');
const meliTransform = require('./meli.transform');

console.log('-------------- ITEM ----------------');

meliService.item('MLA659477272')
  .then((data) => {
    // console.log(data);
    console.log(meliTransform.getParsedItem(data.category, data.item, data.description));

    console.log('-------------- SEARCH ----------------');

    meliService.search('iphone 7')
      .then((data) => {
        console.log(meliTransform.getParsedSearch(data));

        console.log('-------------- SUGGEST ----------------');

        meliService.suggest('iph')
          .then((data) => {
            console.log(data);
          }).catch((err) => {
          console.log(err);
        });

      }).catch((err) => {
      console.log(err);
    });
  }).catch((err) => {
    console.log(err);
});
