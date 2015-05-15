'use strict';

angular.module('albums')

.controller('AlbumController', ['$scope', 'album', function($scope, album) {

	$scope.album = album;
}]);
