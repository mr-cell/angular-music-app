'use strict';

angular.module('common')

.directive('validEmail', function() {
    var pattern = /[a-zA-Z0-9]+@[a-zA-Z0-9\.]+\.[a-zA-Z0-9]+$/;

    return {
        require: 'ngModel',
        link: function ($scope, el, attrs, ctrl) {
            $scope.$watch(attrs.ngModel, function() {
                var isValid = el.val().match(pattern) !== null;
                ctrl.$setValidity('email', isValid);
            });
        }
    };
});
