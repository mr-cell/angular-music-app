'use strict';

angular.module('musicApp', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'spotify', 'common'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('search', {
                url: '/search',
                templateUrl: 'app/search/search.html',
                controller: 'SearchController'
            });

        $urlRouterProvider.otherwise('/');
    });
