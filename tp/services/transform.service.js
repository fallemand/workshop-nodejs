const meliService = require("./meli.service");

class MeliTransform {
  item(id){
    return new Promise ( (resolve, reject) => {
      meliService.item(id)
        .then((data) => {
          let transformedData = {
            path_from_root: data.category.path_from_root,
            pictures: data.pictures,
            id: id,
            condition: "",
            sold_quantity: data.sold_quantity,
            free_shipping: data.shipping.free_shipping,
            title: data.title,
            currency_id: data.currency_id,
            price: data.price,
            description: data.description.plain_text
          };

          transformedData.condition = ( data.condition === 'new' ) ? "Nuevo" : "Usado" ;
          resolve (transformedData);
      }).catch((err) => {
          reject(err);
      })
    });
  }

  search(query){
    return new Promise ( (resolve, reject) =>  {
      meliService.search(query)
        .then( (data) => {
          let path_from_root = [];
          if ( data.filters.length ) {
            path_from_root = data.filters[0].values[0].path_from_root;
          }
          let transformedData = {
            path_from_root,
            query,
            results: []
          };

          data.results.forEach( (currentValue,index) => {
            transformedData.results[index] = {
              id: currentValue.id,
              thumbnail: currentValue.thumbnail,
              free_shipping: currentValue.shipping.free_shipping,
              title: currentValue.title,
              price: currentValue.price,
              location: currentValue.seller_address.city.name
            }
          });
          resolve (transformedData);
        }).catch( (err) => {
          reject(err);
      })
    });
  }

  suggest(query){
    return  meliService.suggest(query);
  }

}


module.exports = new MeliTransform();
