checkTitle = (client) => {
  const itemPage = client.page.ItemPage();
  itemPage.waitForElementVisible('@title')
    .assert.visible('@title');
};

checkPrice = (client) => {
  const itemPage = client.page.ItemPage();
  itemPage.waitForElementVisible('@price')
    .assert.visible('@price');
};

checkDescription = (client) => {
  const itemPage = client.page.ItemPage();
  itemPage.waitForElementVisible('@description')
    .assert.visible('@description');
};

checkImage = (client) => {
  const itemPage = client.page.ItemPage();
  itemPage.waitForElementVisible('@image')
    .assert.visible('@image');
};

module.exports = {
  'Should check the title': (client) => {
    checkTitle(client);
  },
  'Should check the price': (client) => {
    checkPrice(client);
  },
  'Should check the description': (client) => {
    checkDescription(client);
  },
  'Should check the image': (client) => {
    checkImage(client);
  },
  beforeEach: function (client) {
    client.url(client.globals.url_item);
  },
  after: function (client) {
    client.end();
  },
};
