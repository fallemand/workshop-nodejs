showItems = (client, itemId) => {
    const itemPage = client.page.ItemPage();
    itemPage.show(itemId);
    itemPage.assert(itemPrice).containsText("@itemPrice", "$");
  };
  
  module.exports = {
    'Should show Items': (client) => {
      showItems(client, 'iphone')
    },
    beforeEach: function (client) {
      client.url(client.globals.site);
    },
    after: function (client) {
      client.end();
    },
  };
  