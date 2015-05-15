'use strict';

angular.module('common')

.filter('paginate', function () {
	return function(arr, page, perPage) {
		if(page <= 0 || perPage <= 0) {
			return [];
		}

		var howMany = (perPage || 10);
		var start = (page - 1) * howMany;		
		return (arr || []).slice(start, start + howMany);

		// var howMany = (perPage || 10);
		// var start = (page - 1) * howMany;
		// var newarr = (arr || []).concat([]); 
		// return newarr.splice(start, howMany);
	};
});
