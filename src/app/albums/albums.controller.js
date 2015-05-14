'use strict';

angular.module('albums', ['bookmarks', 'spotify'])

.controller('AlbumsController', ['$scope', 'bookmarks', function($scope, bookmarks) {

	$scope.getAlbums = function() {
		return bookmarks.getAll();
	};
}]);