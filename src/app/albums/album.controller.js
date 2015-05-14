'use strict';

angular.module('albums')

.controller('AlbumController', ['$scope', '$stateParams', 'SpotifyService', function($scope, $stateParams, spotify) {

	spotify.getAlbum($stateParams.id).then(function(album) {
		$scope.album = album;
		console.log($scope.album);
	}, function(error) {
		console.error(error);
	});
}]);