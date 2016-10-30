(function (){
  'use strict';

  angular.module('Data')
  .component('itemList', {
      templateUrl: 'src/templates/item.list.template.html',
      bindings: {
        items: '<'
      }
  });

})();
