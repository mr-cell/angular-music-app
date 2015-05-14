'use strict';

angular.module('spotify', [])

.service('SpotifyService', ['$http', '$q', '$window', function($http, $q, $window) {

    var url = 'https://api.spotify.com/v1/search?type=album&limit=50&q=';

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
        
        $http.get(url + query).then(function(response) {
            $window.localStorage.albums = angular.toJson(response.data.albums.items);
            deferred.resolve(response.data.albums.items);
        });
        
        return deferred.promise;
    };
}]);
