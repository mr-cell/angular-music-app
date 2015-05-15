'use strict';

angular.module('albums', ['ui.router', 'spotify', 'bookmarks'])

.config(function($stateProvider) {
    $stateProvider
        .state('albums', {
            url: '/albums',
            templateUrl: 'app/albums/albums.html',
            controller: 'AlbumsController'
        })
        .state('album', {
            url: 'albums/:id',
            templateUrl: 'app/albums/album.html',
            controller: 'AlbumController',
            resolve: {
                album: function($stateParams, SpotifyService) {
                    return SpotifyService.getAlbum($stateParams.id).then(function(album) {
                        return album;
                    });
                }
            }
        });

});