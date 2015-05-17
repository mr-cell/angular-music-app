'use strict';

describe('paginate filter', function() {

	var $filter;
	var array;

	beforeEach(function() {
		module('common');

		inject(function(_$filter_) {
			$filter = _$filter_('paginate');
		});

		array = 'abcdefghijklmnoprqstuwxyz'.split('');
	});

	it('returns [] if given undefined input', function() {
		var input; // undefined

		var result = $filter(input);

		expect(result).toEqual([]);
	});

	it('returns n items', function() {

		var result3Items = $filter(array, 1, 3);
		var result5Items = $filter(array, 1, 5);
		var result4Items = $filter(array, 2, 4);

		expect(result3Items.length).toBe(3);
		expect(result5Items.length).toBe(5);
		expect(result4Items.length).toBe(4);

		expect(result4Items).toEqual(array.slice(4, 4 + 4));
	});

	it('returns all items when perPage >= items.length', function() {
		var result = $filter(array, 1, array.length + 1);

		expect(result).toEqual(array);
	});

	it('returns array of 10 items when perPage is undefined', function() {
		var result = $filter(array, 1);

		expect(result.length).toBe(10);
	});

	it('returns [] when page === 0', function() {
		var result = $filter(array, 0, 3);

		expect(result).toEqual([]);
	});

	it('returns [] when page < 0', function() {
		var result = $filter(array, -1);

		expect(result).toEqual([]);
	});

	it('returns [] when perPage < 0', function() {
		var result = $filter(array, 1, -1);

		expect(result).toEqual([]);
	});
});
