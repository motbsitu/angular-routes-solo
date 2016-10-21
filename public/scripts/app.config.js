angular.module('routeApp')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/lestat', {
            templateUrl: 'views/lestat.html'
        }).when('/armand', {
            templateUrl: 'views/armand.html'
        }).when('/louis', {
            templateUrl: 'views/louis.html'
        }).otherwise({
            redirectTo: '/',
            templateUrl: 'views/home.html'
        });

        $locationProvider.html5Mode(true);
    });
