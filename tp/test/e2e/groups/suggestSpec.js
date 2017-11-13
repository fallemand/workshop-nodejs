function writeOnSearchBar(client, query) {
  const homePage = client.page.HomePage();

  homePage.waitForElementVisible('@searchField', 2000)
    .setValue('@searchField', query)
    .waitForElementVisible('@suggestBox', 3000);
}

module.exports = {
  'Should write "ipho" on search bar': function (client) {
    writeOnSearchBar(client, 'ipho');
  },
  beforeEach(client) {
    client.url(client.globals.site);
  },
  after(client) {
    client.end();
  },
};
