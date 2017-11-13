searchTostadora = (client, query) => {
  const homePage = client.page.HomePage();
  homePage.search(query);

  const searchPage = client.page.SearchPage();
  searchPage.waitForElementVisible('@breadcrumb', 2000)
    .assert.containsText('@breadcrumb', '"tostadora"');
};

module.exports = {
  'Should search Tostadora': (client) => {
    searchTostadora(client, 'tostadora')
  },
  beforeEach: function (client) {
    client.url(client.globals.site);
  },
  after: function (client) {
    client.end();
  },
};