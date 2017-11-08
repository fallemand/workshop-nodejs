module.exports = {
  commands: [
    {
      selectProduct() {
        this.waitForElementVisible('@firstItemResult', 2000)
          .click('@firstItemResult');
      },
    },
  ],
  elements: {
    breadcrumb: '.breadcrumb li:last-child',
    firstItemResult: '.main__content a.search-item:first-child',
  },
};
