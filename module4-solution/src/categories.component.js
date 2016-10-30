(function (){
  'use strict';

  angular.module('Data')
  .component('categoryList', {
    templateUrl: 'src/templates/category.list.template.html',
    bindings: {
      items: '<'
    }
  });

})();
