'use strict';

angular.module('spotify')

.directive('spotifyPoster', ['bookmarks', function(bookmarks) {
	var sizes = {
		sm: 2,
		md: 1,
		lg: 0
	};

	return {
		restrict: 'E',
		templateUrl: 'app/spotify/spotify-poster.template.html',
		replace: true,
		transclude: true,
		scope: {
			album : '=',
			size: '@',
		},
		link: function(scope) {
			var size = sizes[scope.size];
			scope.src = scope.album.images[size].url;

			scope.removeBookmark = function(album) {
				bookmarks.remove(album.id);
			};
		}
	};
}]);