searchQuery = (client, query) => {
  const homePage = client.page.HomePage();
  homePage.search(query);

  const searchPage = client.page.SearchPage();
  searchPage.waitForElementVisible('@breadcrumb', 2000)
  .assert.containsText('@breadcrumb', '' + query + '')
  .assert.visible('@firstElement');
};

selectFirstItem = (client) => {
  const searchPage = client.page.SearchPage();
  searchPage.selectItem();

  const itemPage = client.page.VipPage();
  itemPage.waitForElementVisible('@nameItem', 2000)
  .assert.visible('@priceItem')
  .assert.visible('@imageItem')
  .assert.visible('@descriptionItem')
  .assert.containsText('@nameItem', 'Set 10 Anillos Hippies Boho Middle Ring India Elefante Hindú');
};

module.exports = {
  'Should search Anillos': (client) => {
    searchQuery(client, 'anillos')
    selectFirstItem(client)
    searchQuery(client, 'pulseras')
  },
  beforeEach: function (client) {
    client.url(client.globals.site);
  },
  after: function (client) {
    client.end();
  },
};
