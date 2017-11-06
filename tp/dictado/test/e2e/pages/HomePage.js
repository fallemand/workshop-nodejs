module.exports = {
  commands: [{
    search: function (query) {
      this.waitForElementVisible('@searchField', 2000)
        .setValue('@searchField', query)
        .waitForElementVisible('@searchButton', 2000)
        .click('@searchButton');
    }
  }],
  elements: {
    searchField: '.header__search-input',
    searchButton: '.header__search-btn'
  }
};
