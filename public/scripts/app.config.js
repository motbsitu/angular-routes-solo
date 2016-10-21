angular.module('routeApp')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/lestat', {
            templateUrl: 'views/lestat.html',
            controller: 'ShowController as show'
        }).when('/armand', {
            templateUrl: 'views/armand.html',
            controller: 'ShowController as show'
        }).when('/louis', {
            templateUrl: 'views/louis.html',
            controller: 'ShowController as show'
        }).otherwise({
            redirectTo: '/',
            templateUrl: 'views/home.html'
        });

        $locationProvider.html5Mode(true);
    });
