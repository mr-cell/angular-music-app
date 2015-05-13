'use strict';

angular.module('musicApp')
    .controller('SearchController', ['$scope', '$http', 'SpotifyService', function($scope, $http, spotify) {

        $scope.search = function(query) {
        	spotify.searchAlbums(query).then(function(albums) {
        		$scope.albums = albums;
        	});
        };

        $scope.$watch('query', function() {
        	$scope.search($scope.query);
        });

        $scope.search('batman');
    }]);
