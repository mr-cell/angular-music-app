'use strict';

angular.module('musicApp')
.controller('NavbarCtrl', function($scope) {
	$scope.date = new Date();

	$scope.states = [{
		name: 'search',
		label: 'Search'
	}, {
		name: 'albums',
		label: 'Albums'
	}, {
		name: 'contact',
		label: 'Contact'
	}];
});
