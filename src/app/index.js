'use strict';

angular.module('musicApp', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ui.router', 'ui.bootstrap', 'angular-growl',
    'spotify', 'common', 'bookmarks', 'albums', 'contact'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
                templateUrl: 'app/contact/contact.html',
                controller: 'ContactController'
            });

        $urlRouterProvider.otherwise('/');
    }])
    .config(['growlProvider', function(growlProvider) {
        growlProvider.globalTimeToLive(1500);
        growlProvider.globalDisableCloseButton(true);
        growlProvider.globalDisableCountDown(true);
    }]);
