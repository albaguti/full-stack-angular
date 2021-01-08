(function () {
'use strict';

angular.module('Assigment1App', [])
.controller('MyController', MyController);

MyController.$inject = ['$scope'];
function MyController($scope,
                      $filter,
                      $injector) {
  $scope.checkIt = "Check If Too Much";
  $scope.list = "list comma separated dishes you usually have for lunch";
  $scope.LunchCheckController = function () {
    var check = $scope.list;
    var result = check.split(',');
    console.log(result.length);
    if (result.length > 3 ) {
      $scope.checkIt = "Too much!";
    }
    else {
      $scope.checkIt = "Enjoy!";
    }
    return $scope.checkIt;

  }
}
})();
