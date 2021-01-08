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
    if (!$scope.list){
      console.log("Empty List");
      return $scope.name ="Please enter data first";
    }
    else {
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
}
})();
