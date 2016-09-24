(function () {
  'use strict'
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {
    $scope.list = "";
    $scope.message = "";

    $scope.checkAmount = function () {
      if ($scope.list.length == 0) {
        $scope.message = "Please enter data first";
      }
      else {
        if ($scope.list.split(',').length < 4) {
          $scope.message = "Enjoy!";
        }
        else {
          $scope.message = "Too much!";
        }
      }

    };
  }

})();
