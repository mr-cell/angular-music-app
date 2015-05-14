'use strict';

angular.module('musicApp')
    .controller('SearchController', ['$scope', '$window', '$http', 'SpotifyService', function($scope, $window, $http, spotify) {

        $scope.search = function(query) {
        	spotify.searchAlbums(query).then(function(albums) {
                $window.localStorage.query = query;
        		$scope.albums = albums;
        	});
        };

        $scope.$watch('query', function() {
        	$scope.search($scope.query);
        });

        $scope.query = $window.localStorage.query;
        $scope.search($scope.query);

    }]);
