searchItem = (client, query) => {
  const homePage = client.page.HomePage();
  homePage.search(query);

  const searchPage = client.page.SearchPage();
  searchPage.waitForElementVisible('@breadcrumb', 2000)
    .assert.containsText('@breadcrumb', '"' + query + '"');
};

selectItem = (client, query, child) => {
  const homePage = client.page.HomePage();
  homePage.search(query);
  
  const searchPage = client.page.SearchPage();
  searchPage.selectItem(child);
  searchPage.waitForElementVisible('@price', 2000)
    .assert.containsText('@price', "$");
};

writeText = (client, text) => {
  const homePage = client.page.HomePage();
  homePage.write(text);
  
  homePage.waitForElementVisible('@suggestList', 2000)
    .assert.visible('@firstSuggest')
  
  homePage.clearSearch();
}

module.exports = {
  'Should search iphones and show it in breadcrumb': (client) => {
    searchItem(client, 'iphone 4');
    searchItem(client, 'iphone 5');
    searchItem(client, 'iphone 6');
    searchItem(client, 'iphone 7');
    searchItem(client, 'iphone 8');
  },
  'Should first 5 results have price': (client) => {
    selectItem(client, 'auto', 1);
    selectItem(client, 'auto', 2);
    selectItem(client, 'auto', 3);
    selectItem(client, 'auto', 4);
    selectItem(client, 'auto', 5);
  },
  'Should show list with suggests': (client) => {
    writeText(client, 'auto');
    writeText(client, 'casa');
    writeText(client, 'ventilador');
    writeText(client, 'aire');
    writeText(client, 'puerta');
  },
  beforeEach: function (client) {
    client.url(client.globals.url_home);
  },
  after: function (client) {
    client.end();
  },
};
