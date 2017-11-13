function searchCellphone(client, query) {
  var homePage = client.page.HomePage();
  homePage.search(query);

  var searchPage = client.page.SearchPage();
  searchPage.waitForElementVisible('@breadcrumb', 3000)
    .assert.containsText('@breadcrumb', '"' + query + '"');
}


module.exports = {

  'Should search Iphone': function (client) {
    searchCellphone(client, 'tostadora')
  },

  'Should search Iphone, select one and show all Item sections': function (client) {
    searchCellphone(client, 'tostadora');
  
    var searchPage = client.page.SearchPage();
    searchPage.clickItem();

    var itemPage = client.page.ItemPage();
    itemPage.waitForElementVisible('@title', 2000);
    itemPage.waitForElementVisible('@picture', 2000);
    itemPage.waitForElementVisible('@description', 2000);
    itemPage.waitForElementVisible('@price', 2000);
    itemPage.waitForElementVisible('@buyButton', 2000);
  },

  beforeEach: function (client) {
    client.url(client.globals.site);
  },
  after: function (client) {
    client.end();
  },

};
