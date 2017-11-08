module.exports = {
  commands: [
    {
      clickItem() {
        this.waitForElementVisible('@firstItem', 2000)
          .click('@firstItem');
      },
    },
  ],
  elements: {
    breadcrumb: '.breadcrumb li:last-child',
    firstItem: '.search-item',
  },
};
