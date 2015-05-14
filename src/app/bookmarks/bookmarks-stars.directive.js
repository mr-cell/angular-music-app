'use strict';

angular.module('bookmarks')

.directive('bookmarksStars', ['bookmarks', function(bookmarks) {
	
	return {
		scope: {
			bookmark: '='
		},
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'app/bookmarks/bookmarks-stars.html',
		replace: true,
		link: function(scope) {
			scope.saveBookmark = function(bookmark) {
	            bookmarks.add(bookmark);
	        };

	        scope.removeBookmark = function(bookmark) {
	            bookmarks.remove(bookmark.id);
	        };

	        scope.isBookmarked = function(bookmark) {
	            return bookmarks.has(bookmark.id);
	        };
		}
	};
}]);