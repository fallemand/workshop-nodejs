module.exports = {
  commands: [{
    search: function (query) {
      this
        .waitForElementVisible("@searchInput",500)
        .setValue("@searchInput",query)
        .waitForElementVisible("@suggest")
        .assert.visible("@searchButton")
        .click("@searchButton");
    }
  }],
  elements: {
    searchInput: ".header__search-input",
    searchButton: ".header__search-btn",
    breadcrumb: ".breadcrumb",
    lastBreadcrumb: ".breadcrumb__element:last-child",
    suggest: ".suggest"
  }
};
