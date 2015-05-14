'use strict';

angular.module('musicApp', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'spotify', 'common', 'bookmarks', 'albums'])
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
            .state('albums', {
                url: '/albums',
                templateUrl: 'app/albums/albums.html',
                controller: 'AlbumsController'
            })
            .state('album', {
                url: 'albums/:id',
                templateUrl: 'app/albums/album.html',
                controller: 'AlbumController'
            });

        $urlRouterProvider.otherwise('/');
    });
