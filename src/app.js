angular.module('dc-app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/wait/:id', {
        templateUrl: 'templates/wait.html'
        , controller: 'wait'
      })
      .otherwise({
        templateUrl: 'templates/register.html'
        , controller: 'register'
      })
  }])
