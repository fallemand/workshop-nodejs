search = (client, query) => {
  const homePage = client.page.HomePage();
  homePage
    .waitForElementVisible("@breadcrumb")
    .assert.containsText("@lastBreadcrumb", "Inicio")
    .search(query);

  const searchPage = client.page.SearchPage();
    searchPage
      .waitForElementVisible("@breadcrumb")
      .assert.containsText("@lastBreadcrumb", query)
      .selectItem();

  const itemPage = client.page.ItemPage();
    itemPage
      .waitForElementVisible("@breadcrumb")
      .assert.containsText("@lastBreadcrumb", "Otros")
      .waitForElementVisible("@item")
      .assert.visible("@itemPicture")
      .assert.visible("@itemCondition")
      .assert.visible("@itemTitle")
      .assert.visible("@itemPrice")
      .assert.visible("@itemDescription")
      .buy();
};

module.exports = {
  beforeEach: function (client) {
    client.url(client.globals.site);
  },
  after: function (client) {
    client.end();
  },
  "Should search for papa": (client) => {
    search(client, "papa")
  }
};
