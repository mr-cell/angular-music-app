'use strict';

angular.module('bookmarks')

.controller('BookmarksController', ['$scope', 'bookmarks', function($scope, bookmarks) {
	
	$scope.getBookmarks = function() {
		return bookmarks.getAll();
	};

	$scope.removeBookmark = function(album) {
		bookmarks.remove(album.id);
	};
}]);
