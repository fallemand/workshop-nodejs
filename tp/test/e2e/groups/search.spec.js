const search = (client, query) => {
  const homePage = client.page.home();

  homePage.search(query);
};

const breadcrumb = (client, query) => {
  const searchPage = client.page.search();

  searchPage.waitForElementVisible('@breadcrumb', 2000)
    .assert.containsText('@breadcrumb', `"${query}"`);
};

const hasResults = (client) => {
  const searchPage = client.page.search();

  searchPage.waitForElementVisible('@result', 2000)
    .assert.visible('@result');
};

const useSuggestion = (client, query) => {
  const homePage = client.page.home();

  homePage.suggest(query);
};

module.exports = {
  'Should search': (client) => {
    search(client, 'macbook');
  },

  'Should search and display query in breadcrumb': (client) => {
    search(client, 'macbook');
    breadcrumb(client, 'macbook');
  },

  'Should search and display at least one result': (client) => {
    search(client, 'macbook');
    hasResults(client);
  },

  'Should search using the first suggestion': (client) => {
    useSuggestion(client, 'mac');
    hasResults(client);
  },

  beforeEach(client) {
    client.url(client.globals.site);
  },

  after(client) {
    client.end();
  },
};
