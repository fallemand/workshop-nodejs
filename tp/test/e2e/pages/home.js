const home = {
  commands: [{
    search(query) {
      this.waitForElementVisible('@searchField', 2000)
        .setValue('@searchField', query)
        .waitForElementVisible('@searchButton', 2000)
        .click('@searchButton');
    },

    suggest(query) {
      this.waitForElementVisible('@searchField', 2000)
        .setValue('@searchField', query)
        .waitForElementVisible('@suggestBox', 2000)
        .waitForElementVisible('@suggestItemLink', 2000)
        .click('@suggestItemLink');
    },
  }],

  elements: {
    searchField: '.header__search-input',
    searchButton: '.header__search-btn',
    suggestBox: '.suggest',
    suggestItemLink: '.suggest__item:first-child a',
  },
};

module.exports = home;
