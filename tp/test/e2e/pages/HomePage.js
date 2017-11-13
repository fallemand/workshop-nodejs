module.exports = {
  commands: [{
    search: function (query) {
      this.waitForElementVisible('@searchField', 2000)
        .setValue('@searchField', query)
        .waitForElementVisible('@searchButton', 2000)
        .click('@searchButton');
    },
    typeQuery: function (query) {
      this.waitForElementVisible('@searchField', 2000)
        .setValue('@searchField', query)
    },
    clickSuggestedOption: function() {
      this.waitForElementVisible('@suggestItem', 2000)
      .click('@suggestItemLink');
    }
  }],
  elements: {
    searchField: '.header__search-input',
    searchButton: '.header__search-btn',
    suggestItem: '.suggest__item',
    suggestItemLink: '.suggest__item a'
  }
};
