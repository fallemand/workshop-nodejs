const meliService = require('./meli.service');
const transformService = require('./transform.service');

console.log('-------------- ITEM ----------------');

meliService.item('MLA659477272')
  .then( (data) => {
    console.log(data);

    console.log('-------------- SEARCH ----------------');

    meliService.search('iphone')
      .then( (data) => {
        console.log(data);

        console.log('-------------- SUGGEST ----------------');

        meliService.suggest('iph')
          .then( (data) => {
            console.log(data);

            console.log('------------- TRANSFORM ------------');
            console.log('-------------- ITEM ----------------');

            transformService.item('MLA659477272')
              .then( (data) => {
                console.log(data);

                console.log('-------------- SEARCH ----------------');

                transformService.search('iphone')
                  .then( (data) => {
                    console.log(data);

                    console.log('-------------- SUGGEST ----------------');

                    transformService.suggest('iph')
                      .then( (data) => {
                        console.log(data);
                      }).catch( (err) => {
                      console.log(err);
                    });

                  }).catch( (err) => {
                  console.log(err);
                });
              }).catch( (err) => {
              console.log(err);
            });
          }).catch( (err) => {
          console.log(err);
        });

      }).catch( (err) => {
      console.log(err);
    });
  }).catch( (err) => {
    console.log(err);
});






