searchItem = (client, query) => {
  const homePage = client.page.HomePage();
  homePage.search(query);

  const searchPage = client.page.SearchPage();
  searchPage.waitForElementVisible('@breadcrumb', 2000)
    .assert.containsText('@breadcrumb', '"' + query + '"');
};

module.exports = {
  'Should search iphones and show it in breadcrumb': (client) => {
    searchItem(client, 'iphone 6')
    searchItem(client, 'iphone 7')
    searchItem(client, 'iphone 8')
  },
  beforeEach: function (client) {
    client.url(client.globals.url_home);
  },
  after: function (client) {
    client.end();
  },
};
