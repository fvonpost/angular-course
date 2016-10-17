(function (){
  'use strict';

  angular.module('Data')
  .component('categories', {
      templateUrl: 'src/templates/categories.template.html',
      // controller: CategoriesComponentController,
      bindings: {
        categoryItems: '<'
      }
  });

})();
