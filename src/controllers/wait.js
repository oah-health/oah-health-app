angular.module('dc-app')
  .controller('wait', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.id = $routeParams.id;
  }])
