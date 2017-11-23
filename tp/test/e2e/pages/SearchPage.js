module.exports = {
  commands: [{
    selectItem: function() {
      this
        .waitForElementVisible("@firstItem")
        .click("@firstItem")
    }
  }],
  elements: {
    firstItem: ".search-item:first-child",
    breadcrumb: ".breadcrumb",
    lastBreadcrumb: ".breadcrumb__element:last-child"
  }
};
