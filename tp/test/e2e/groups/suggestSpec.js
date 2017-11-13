function typeSearchQuery(client, query) {
  var homePage = client.page.HomePage();
  homePage.typeQuery(query);

  homePage.waitForElementVisible('@suggestItem', 3000).
  assert.visible('@suggestItem');
}

function selectSuggestedOption(client) {
  var homePage = client.page.HomePage();
  homePage.clickSuggestedOption();

  var searchPage = client.page.SearchPage();
  searchPage.waitForElementVisible('@searchPageTitle', 3000)
    .assert.containsText('@searchPageTitle', 'Search');
}

module.exports = {

  'Should type something in search bar and see suggestions displayed': function (client) {
      typeSearchQuery(client, 'tost');
  },

  'Should click on suggestion and be redirected to searchPage': function (client) {
      typeSearchQuery(client, 'tost');
      selectSuggestedOption(client);
  },

  beforeEach: function (client) {
    client.url(client.globals.site);
  },

  after: function (client) {
    client.end();
  },

};
