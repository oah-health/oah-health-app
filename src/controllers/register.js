angular.module('dc-app')
  .controller('register', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.register = function() {
      $http.post(
        '/api/register'
        , { mobile: $scope.mobile }
      ).then(
        function(response) {
          $location.path('/wait/' + response.data.id);
        }
        , function(err) {
          console.log(err)
        })
    }
  }]);
