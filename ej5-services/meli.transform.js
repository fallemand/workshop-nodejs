class Transformer {
  item(data) {
    return {
      id: data.itemData.id,
      title: data.itemData.title,
      price: data.itemData.price,
      pictures: data.itemData.pictures,
    };
  }

  search(data) {
    data = JSON.parse(data);
    return data.results.map((product) => {
      return {
        id: product.id,
        permalink: product.permalink,
        thumbnail: product.thumbnail,
        title: product.title,
        price: product.price,
        free_shipping: product.shipping.free_shipping,
        city_name: product.address.city_name,
      };
    });
  }

  suggest(data) {
    data = JSON.parse(data);
    return data.suggested_queries.map((suggestion) => {
      return {
        q: suggestion.q,
      };
    });
  }
}

module.exports = new Transformer();

/*

<a class="search-item" href="{{permalink}}">
    <div class="search-item__picture">
        <img src="{{thumbnail}}" alt="{{title}}">
    </div>
    <div class="search-item__description">
        <span class="search-item__price">{{{formatedMoney price}}}</span>
        {{#if shipping.free_shipping}}
        <i class="search-item__freeshipment"></i>
        {{/if}}
        <p class="search-item__title">{{title}}</p>
    </div>
    <div class="search-item__location">{{address.city_name}}</div>
</a>

 */
