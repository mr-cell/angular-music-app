'use strict';

angular.module('contact')

.controller('ContactController', ['$scope', '$http', 'growl', function($scope, $http, growl) {
	
	$scope.send = function() {
		$http.post('/', $scope.contact).then(function(response) {

		}, function(response) {
			if(response.status === 404) {
				growl.error('Resource was not found!');
			}
		});
	};
}]);