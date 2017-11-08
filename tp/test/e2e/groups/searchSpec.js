searchCellphone = (client, query) => {
  const homePage = client.page.HomePage();
  homePage.search(query);

  const searchPage = client.page.SearchPage();
  searchPage.waitForElementVisible('@breadcrumb', 2000).assert.containsText('@breadcrumb', '"' + query + '"');
};

selectItem = (client) => {
  const searchPage = client.page.SearchPage();
  searchPage.selectProduct();

  const itemPage = client.page.ItemPage();
  itemPage.waitForElementVisible('@itemName', 2000)
  .assert.visible('@image')
  .assert.containsText('@itemName', 'Celular Libre Apple Iphone 6 Gris 32gb');
};

module.exports = {
  'Should search Iphone': (client) => {
    searchCellphone(client, 'iphone');
    selectItem(client);
  },
  beforeEach(client) {
    client.url(client.globals.site);
  },
  after(client) {
    client.end();
  },
};
