'use strict';

angular.module('albums', ['bookmarks'])

.controller('AlbumsController', ['$scope', 'bookmarks', function($scope, bookmarks) {

	$scope.getAlbums = function() {
		return bookmarks.getAll();
	}
}]);