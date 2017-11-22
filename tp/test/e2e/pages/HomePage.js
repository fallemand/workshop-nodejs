module.exports = {
  commands: [{
    search: function (query) {
      this.waitForElementVisible('@searchField', 2000)
        .setValue('@searchField', query)
        .waitForElementVisible('@searchButton', 2000)
        .click('@searchButton');
    },
    write: function (text) {
      this.waitForElementVisible('@searchField', 2000)
        .setValue('@searchField', text);
    },
    clearSearch: function() {
      this.waitForElementVisible('@searchField', 2000)
        .clearValue('@searchField');
    }
  }],
  elements: {
    searchField: '.header__search-input',
    searchButton: '.header__search-btn',
    suggestList: '.suggest',
    firstSuggest: '.suggest__item:first-child',
  }
};
