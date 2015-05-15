'use strict';

angular.module('spotify', [])

.service('SpotifyService', ['$http', '$q', '$window', function($http, $q, $window) {

    var baseUrl = 'https://api.spotify.com';
    var searchUrl = baseUrl + '/v1/search?type=album&limit=50&q=';
    var albumUrl = baseUrl + '/v1/albums/';

    this.searchAlbums = function(query) {
        var deferred = $q.defer();

        if (query === undefined || query === '') {
            deferred.resolve([]);
            return deferred.promise;
        } 

        if($window.localStorage.query === query && $window.localStorage.albums) {
            deferred.resolve(angular.fromJson($window.localStorage.albums));
            return deferred.promise;
        }
        
        $http.get(searchUrl + query).then(function(response) {
            $window.localStorage.albums = angular.toJson(response.data.albums.items);
            deferred.resolve(response.data.albums.items);
        });
        
        return deferred.promise;
    };

    this.getAlbum = function(albumId) {
        var deferred= $q.defer();

        if(albumId === undefined || albumId === '') {
            deferred.resolve({});
            return deferred.promise;
        }

        $http.get(albumUrl + albumId).then(function(response) {
            deferred.resolve(response.data);
        }, function(response) {
            deferred.reject(response.data.error);
        });

        return deferred.promise;
    };
}]);
