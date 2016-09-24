(function () {
  'use strict'

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController (ShoppingListCheckOffService) {
    var tobuy = this;
    tobuy.items = ShoppingListCheckOffService.getToBuyItems();

    tobuy.removeItem = function (index) {
      ShoppingListCheckOffService.removeItem(index);
    };

  }

  function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService () {
    var service = this;

    // To buy list
    var toBuyItems = [
      {name: "cookies", quantity: 10}, // To make Yaakov happy
      {name: "chips", quantity: 100},  // This is for me
      {name: "bloke", quantity: 200},  // Have a Bloke, have a smile
      {name: "root beer", quantity: 12},
      {name: "cheese doodles", quantity: 10}
    ];

    // Already bought list
    var boughtItems = [];

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

    service.removeItem = function (index) {
      boughtItems.push(toBuyItems.splice(index, 1)[0]);
    };

  }

})();
