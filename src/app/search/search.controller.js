'use strict';

angular.module('musicApp')
    .controller('SearchController', ['$scope', '$window', 'SpotifyService', 'bookmarks', 
        function($scope, $window, spotify, bookmarks) {

        $scope.search = function(query) {
            spotify.searchAlbums(query).then(function(albums) {
                $window.localStorage.query = query;
                $scope.albums = albums;
            });
        };

        $scope.saveBookmark = function(album) {
            bookmarks.add(album);
        };

        $scope.removeBookmark = function(album) {
            bookmarks.remove(album);
        };

        $scope.isBookmarked = function(album) {
            // return bookmarks.get(album) ? true : false;
            return bookmarks.has(album.id);
        };

        $scope.$watch('query', function() {
            $scope.search($scope.query);
        });

        $scope.query = $window.localStorage.query;
        $scope.search($scope.query);

    }]);
