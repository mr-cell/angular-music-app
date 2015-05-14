'use strict';

angular.module('bookmarks')

.factory('bookmarks', ['$window', function($window) {

	var items = angular.fromJson($window.localStorage.bookmarks) || [];

	function persist(items) {
		$window.localStorage.bookmarks = angular.toJson(items);
	}

	function add(item) {
		if (!has(item.id)) {
			items.push(item);
			persist(items);
		}
	}

	function remove(id) {
		items = items.filter(function(item) {
			return item.id !== id;
		});
		persist(items);
	}

	function getAll() {
		return items.concat();
	}

	function get(id) {
		return items.filter(function(item) {
			return item.id === id;
		});
	}

	function has(id) {
		return items.some(function(item) {
			return item.id === id;
		});
	}

	return {
		add: add,
		remove: remove,
		getAll: getAll,
		get: get,
		has: has
	};
}]);
