module.exports = {
  commands: [{
    show: function (itemId) {
      this.waitForElementVisible('@itemInfo', 2000)
    }
  }],
  elements: {
    itemInfo: '.item__info',
    itemPrice: 'item__price'
  }
};
