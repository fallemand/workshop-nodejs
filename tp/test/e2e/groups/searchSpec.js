function searchCellphone(client, query) {
  const homePage = client.page.HomePage();
  homePage.search(query);

  const searchPage = client.page.SearchPage();
  searchPage.waitForElementVisible('@breadcrumb', 2000)
    .assert.containsText('@breadcrumb', '"' + query + '"');
}

function navigateToItem(client) {
  var searchPage = client.page.SearchPage();
  var itemPage = client.page.ItemPage();
  searchPage.clickItem();
  itemPage.waitForElementVisible('@itemTitle', 2000)
    .assert.containsText('@itemTitle', 'Iphone');
}

module.exports = {
  'Should search Iphone': function (client) {
    searchCellphone(client, 'iphone');
    navigateToItem(client);
  },
  beforeEach(client) {
    client.url(client.globals.site);
  },
  after(client) {
    client.end();
  },
};
