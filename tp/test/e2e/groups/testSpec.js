searchItem = (client, query) => {
  const homePage = client.page.HomePage();
  homePage.search(query);

  const searchPage = client.page.SearchPage();
  searchPage.waitForElementVisible('@breadcrumb', 2000)
    .assert.containsText('@breadcrumb', '"' + query + '"');
};

showItem = (client, query) => {
  const itemPage = client.page.ItemPage();
  itemPage.show(item);

  itemPage.waitForElementVisible('@itemInfo', 2000)
    .assert.containsText('@itemPrice', "$");
};

module.exports = {
  'Should search items': (client) => {
    client.url(client.globals.to_test_search);
    searchItem(client, 'iphone')
    searchItem(client, 'mouse')
    searchItem(client, 'motorola')
    searchItem(client, 'mate')
  },
  'Should show items': (client) => {
    client.url(client.globals.to_test_items);
    showItem(client, 'MLA1234567')
    showItem(client, 'MLA1234568')
    showItem(client, 'MLA1234569')
  },
  after: function (client) {
    client.end();
  },
};
