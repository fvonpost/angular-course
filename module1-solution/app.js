(function () {
  'use strict'
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {
    $scope.list = "";

    $scope.checkAmount = function () {
      if ($scope.list.length == 0) {
        $scope.list = "Please enter data first";
      }
      else {
        if ($scope.list.split(',').length < 4) {
          $scope.list = "Enjoy!";
        }
        else {
          $scope.list = "Too much!";
        }
      }

      $scope.clearText = function() {
        $scope.list = "";
      }
    };
  }

})();
