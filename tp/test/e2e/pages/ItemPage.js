module.exports = {
  commands: [{
    buy: function(){ 
      this
        .assert.visible("@itemBuyButton")
        .click("@itemBuyButton")
    }
  }],
  elements: {
    breadcrumb: ".breadcrumb",
    lastBreadcrumb: ".breadcrumb__element:last-child",
    item: ".item",
    itemPicture: ".item__picture",
    itemCondition: ".item__condition",
    itemTitle: ".item__title",
    itemPrice: ".item__price",
    itemBuyButton: ".item__buy",
    itemDescription: ".item__description"
  }
};
