'use strict';

angular.module('albums')

.controller('AlbumsController', ['$scope', 'bookmarks', function($scope, bookmarks) {

	$scope.getAlbums = function() {
		return bookmarks.getAll();
	};
}]);