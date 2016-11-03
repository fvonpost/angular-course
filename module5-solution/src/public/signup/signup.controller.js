(function () {

angular.module('public')
.controller('SignupController', SignupController);

function SignupController() {
  var signupCtrl = this;

  signupCtrl.user = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    favorite: ''
  };

  signupCtrl.submit = function () {
    console.log("Submitted data:" + signupCtrl.user);
  };
}

})();
