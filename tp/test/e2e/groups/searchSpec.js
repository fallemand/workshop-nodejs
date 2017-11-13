searchCellphone = (client, query) => {
    const homePage = client.page.HomePage();
    homePage.search(query);
  
    const searchPage = client.page.SearchPage();
    searchPage.waitForElementVisible('@breadcrumb', 2000)
      .assert.containsText('@breadcrumb', '"' + query + '"');
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