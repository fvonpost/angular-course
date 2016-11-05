(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService','ApiPath'];

  function MyInfoController(MenuService, ApiPath) {
    var infoCtrl = this;
    infoCtrl.apiPath = ApiPath;
    infoCtrl.myInfo = MenuService.getMyInfo();
    MenuService.getMenuItem(infoCtrl.myInfo.favorite).then(function(result) {
      if (result != undefined) {
        infoCtrl.favoriteDish = result;
        console.log(infoCtrl.favoriteDish);
      }
      else {
        infoCtrl.myInfo.valid = false;
      }
    })
  }

})();
