function searchCellphone(client, query) {
  var homePage = client.page.HomePage();
  homePage.search(query);

  var searchPage = client.page.SearchPage();
  searchPage.waitForElementVisible('@breadcrumb', 2000)
    .assert.containsText('@breadcrumb', '"' + query + '"');

}

module.exports = {

  'Should search Iphone': function(client) {
    searchCellphone(client, 'iphone')
  },
  beforeEach: function(client) {
    client.url(client.globals.site);
  },
  after: function(client) {
    client.end();
  },

};
