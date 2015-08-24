var app = angular.module('app', ['ngRoute', 'angularMoment']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: '/partials/login.html'
    })
    .when('/dashboard',{
        templateUrl: 'partials/dashboard.html'
    })
    .when('/askPoll',{
        templateUrl: 'partials/askPoll.html'
    })
    .when('/newPoll',{
        templateUrl: 'partials/newPoll.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});