(function () {
  'use strict'

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective);


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        foundItems: '<',
        onRemove: '&',
        showError: '<'
      },
      restrict: 'E',
      controller: NarrowItDownController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrow = this;

    narrow.searchTerm = "";
    narrow.found = [];
    narrow.showError = false;

    narrow.getItems = function () {
      MenuSearchService.getMatchedMenuItems(narrow.searchTerm).then(function (result) {
          if (result.length > 0) {
            narrow.found = result;
            console.log(narrow.found);
          }
          else {
            narrow.showError = true;
          }
      })
      .catch(function (error) {
        narrow.showError = true;
      })
    }

    narrow.removeItem = function (itemIndex) {
      narrow.found.splice(itemIndex, 1);
    }
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")}).then(function (result) {
          var items = [];
          for (var i = 0; i < result.data.menu_items.length; i++) {
            if (0 < result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())) {
              items.push(result.data.menu_items[i]);
            }
          }
          return items;
        })
      };
  }

})();
