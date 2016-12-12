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
