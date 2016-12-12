angular.module('dc-app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/wait/:id', {
        templateUrl: 'templates/wait.html'
        , controller: 'wait'
      })
      .when('/contact', {
        templateUrl: 'templates/contact.html'
      })
      .when('/create-profile/:id', {
        templateUrl: 'templates/profile.html'
      })
      .otherwise({
        templateUrl: 'templates/register.html'
        , controller: 'register'
      })
  }])

angular.module('dc-app')
  .controller('register', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.emergency = false;
    $scope.register = function() {
      $http.post(
        '/api/register'
        , {
          mobile: $scope.mobile
          , emergency: $scope.emergency
          , natureOfEmergency: $scope.natureOfEmergency
        }
      ).then(
        function(response) {
          $location.path('/wait/' + response.data.id);
        }
        , function(err) {
          console.log(err)
        })
    }
  }]);

angular.module('dc-app')
  .controller('wait', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
    $scope.waitTime = Math.trunc(Math.random() * 60);
    $scope.patientsInQueue = Math.ceil($scope.waitTime / 15);
    $scope.id = $routeParams.id;
  }])
