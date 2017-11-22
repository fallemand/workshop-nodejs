module.exports = {
  commands: [{
    selectItem: function (child) {
      this.waitForElementVisible(`.search-item:nth-child(${child})`, 2000)
        .click(`.search-item:nth-child(${child})`);
    }
  }],
  elements: {
    breadcrumb: '.breadcrumb li:last-child',
    price: '.item__price',
  }
};
