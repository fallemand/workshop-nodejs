const search = (client, query) => {
  const homePage = client.page.home();
  const searchPage = client.page.search();

  homePage.search(query);

  searchPage.waitForElementVisible('@result', 2000)
    .click('@result');
};

const item = (client) => {
  const itemPage = client.page.item();

  itemPage.waitForElementVisible('@title', 2000)
    .assert.visible('@title');
  itemPage.waitForElementVisible('@picture', 2000)
    .assert.visible('@picture');
  itemPage.waitForElementVisible('@price', 2000)
    .assert.visible('@price');
  itemPage.waitForElementVisible('@button', 2000)
    .assert.visible('@button');
  itemPage.waitForElementVisible('@description', 2000)
    .assert.visible('@description');
};

module.exports = {
  'Should contain basic item elements': (client) => {
    search(client, 'macbook');
    item(client);
  },

  beforeEach(client) {
    client.url(client.globals.site);
  },

  after(client) {
    client.end();
  },
};
