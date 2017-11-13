module.exports = {
    commands: [{
    clickItem: function () {
        this.waitForElementVisible('@searchItem', 2000)
        this.click('@searchItem');
    }
  }],
  elements: {
    breadcrumb: '.breadcrumb li:last-child',
    searchItem: '.search-item',
    searchPageTitle: '.main__content h1'
  }
};
