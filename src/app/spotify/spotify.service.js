'use strict';

angular.module('spotify', [])

.service('SpotifyService', ['$http', '$q', function($http, $q) {

    var url = 'https://api.spotify.com/v1/search?type=album&limit=50&q=';

    this.searchAlbums = function(query) {
        var deferred = $q.defer();

        if (query === undefined || query === '') {
            deferred.resolve([]);
        } else {
        	$http.get(url + query).then(function(response) {
                deferred.resolve(response.data.albums.items);
            });
        }
        return deferred.promise;
    };
}]);
