angular.module('routeApp')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/lestat', {
            templateUrl: 'views/lestat.html'
        }).when('/armand', {
            templateUrl: 'views/armand.html'
        }).when('/louis', {
            templateUrl: 'views/louis.html'
        });
        //lets us use normal looking links - /home
        //need to set base href of / in index.html
        $locationProvider.html5Mode(true);
    });
