searchCellphone = (client, query) => {
  const homePage = client.page.HomePage();
  homePage.search(query);

  const searchPage = client.page.SearchPage();
  searchPage.waitForElementVisible('@breadcrumb', 2000)
    .assert.containsText('@breadcrumb', '"' + query + '"');

  const vipPage = client.page.VipPage();
  searchPage.clickItem();
  vipPage.waitForElementVisible('@item', 2000)
  .assert.containsText('@title', 'Iphone 6 16gb Lte 4g Libres Nuevos Caja Sellados');
 //hacer test de suggest
};


module.exports = {
  'Should search Iphone': (client) => {
    searchCellphone(client, 'iphone')
  },
  beforeEach: function (client) {
    client.url(client.globals.site);
  },
  after: function (client) {
    client.end();
  },
};
