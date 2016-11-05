(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];

function SignupController(MenuService) {
  var signupCtrl = this;

  signupCtrl.user = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    favorite: '',
    valid: false,
    registered: false
  };

  signupCtrl.submit = function () {
    signupCtrl.user.favorite = signupCtrl.user.favorite.toUpperCase();
    MenuService.getMenuItem(signupCtrl.user.favorite).then(function(result) {
      if (result != undefined) {
        signupCtrl.user.valid = true;
        signupCtrl.user.registered = true;
        MenuService.storeMyInfo(signupCtrl.user);
      }
      else {
        signupCtrl.user.valid = false;
      }
    }).catch(function(error) {
      signupCtrl.user.valid = false;
    })
  };
}

})();
