
function getNumberDecimals(number) {
  const n = number.toFixed(2);
  return parseInt(n.slice(-2), 10);
}

function getCategories(searchResultFilters) {
  const categoryFilter = searchResultFilters.filter(obj => obj.id === 'category');
  let catArr = [];
  if (categoryFilter.length > 0) {
    catArr = categoryFilter[0].values[0].path_from_root.map((item, index) => item.name);
  }
  return catArr;
}

function getParsedItems(searchResultItems) {
  const parsedItems = searchResultItems.map((item, index) => {
    const items = {};

    items.id = item.id;
    items.title = item.title;
    items.price = {
      currency: item.currency_id,
      amount: item.price,
      decimals: getNumberDecimals(item.price)
    };
    items.picture = item.thumbnail;
    items.condition = item.condition;
    items.free_shipping = item.shipping.free_shipping;
    items.address = item.address;

    return items;
  });
  return parsedItems;
}

function getParsedItemDetail(itemDetail) {
  const parsedItem = {};

  parsedItem.id = itemDetail.id;
  parsedItem.title = itemDetail.title;
  parsedItem.price = {
    currency: itemDetail.currency_id,
    amount: itemDetail.price,
    decimals: getNumberDecimals(itemDetail.price)
  };
  return parsedItem;
}

class MeliTrasnform {
  getParsedSearch(searchResults) {
    const parsedSearch = {};

    parsedSearch.categories = getCategories(searchResults.filters);
    parsedSearch.items = getParsedItems(searchResults.results);

    return parsedSearch;
  }

  getParsedItem (categoryInfo, itemDetail, itemDesc) {
    const parsedItem = {};
    const catArr = categoryInfo.path_from_root.map((item, index) => item.name);

    parsedItem.item = getParsedItemDetail(itemDetail);
    parsedItem.picture = itemDetail.thumbnail;
    parsedItem.condition = itemDetail.condition;
    parsedItem.free_shipping = itemDetail.shipping.free_shipping;
    parsedItem.sold_quantity = itemDetail.sold_quantity;
    parsedItem.description = itemDesc;
    parsedItem.categories = catArr;
    parsedItem.permalink = itemDetail.permalink;

    return parsedItem;
  }
}

module.exports = new MeliTrasnform();
