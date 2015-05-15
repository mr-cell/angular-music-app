'use strict';

angular.module('musicApp', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ui.router', 'ui.bootstrap', 'spotify', 
    'common', 'bookmarks', 'albums', 'contact'])
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
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/contact/contact.html'
            });

        $urlRouterProvider.otherwise('/');
    });
