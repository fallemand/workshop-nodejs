module.exports = {
  commands: [{
    clickItem: function () {
      this.waitForElementVisible('@searchItem', 2000)
        .click('@searchItem');
    }
  }],
  elements: {
    "breadcrumb": '.breadcrumb li:last-child',
    "searchItem": '.search-item'
  }
};
