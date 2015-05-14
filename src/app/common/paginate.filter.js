'use strict';

angular.module('common')

.filter('paginate', function () {
	return function(arr, page, perPage) {
		var howMany = (perPage || 10);
		var start = (page - 1) * howMany;		
		return (arr || []).slice(start, start + howMany);
	};
});
