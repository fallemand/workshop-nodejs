const meliService = require('./meli.service');

console.log('-------------- ITEM ----------------');

meliService.item('MLA659477272')
  .then((data) => {
    console.log(data);

    console.log('-------------- SEARCH ----------------');

    meliService.search('2312312321')
      .then((data) => {
        console.log(data);

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
