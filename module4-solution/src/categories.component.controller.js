(function (){
  'use strict';

  angular.module('Data')
  .controller('CategoriesComponentController', CategoriesComponentController);

  CategoriesComponentController.$inject = ['items'];

  function CategoriesComponentController(items) {
    var categoryCtrl = this;
    categoryCtrl.items = items;
  };

})();
