const meliService = require("meli.service");

class MeliTransform {
  item(id){
    return new Promise ( () => {
      meliService.item(id)
        .then((data) => {
          let transformedData = {
            path_from_root: data.category.path_from_root,
            pictures: data.pictures,
            condition: data.condition,
            sold_quantity: data.sold_quantity,
            free_shipping: data.shipping.free_shipping,
            title: data.title,
            price: data.price,
            description: data.description
          };

          resolve (transfomedData);
      }).catch((err) => {
          reject(err);
      })
    });
  }

  search(query){
    return new Promise ( () =>  {
      meliService.search(query)
        .then( (data) => {
          let transformedData = {
            path_from_root: data.category.path_from_root,
            thumbnail: data.thumbnail,
            free_shipping: data.shipping.free_shipping,
            title: data.title,
            price: data.price,
            location: data.seller_address.city.name;
          }
        });
    });
  }

  suggest(query){
    return  meliService.suggest(query);
  }

}


module.exports = new MeliTransform();
