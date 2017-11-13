module.exports = {
  commands: [{
    selectItem: function (query) {
      this.waitForElementVisible('@item', 2000)
        .click('@item');
    }
  }],
  elements: {
    breadcrumb: '.breadcrumb li:last-child',
    item: '.search-item'
  }
};
