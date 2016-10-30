(function (){
  'use strict';

  angular.module('Data')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['items'];

  function CategoriesController(items) {
    var categoryCtrl = this;
    categoryCtrl.items = items;
  };

})();
