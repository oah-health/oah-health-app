angular.module('dc-app')
  .controller('wait', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
    $scope.waitTime = Math.trunc(Math.random() * 60);
    $scope.patientsInQueue = Math.ceil($scope.waitTime / 15);
    $scope.id = $routeParams.id;
  }])
