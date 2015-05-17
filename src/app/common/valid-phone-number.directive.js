'use strict';

angular.module('common')

.directive('validPhoneNumber', function() {
    var pattern = /[0-9]+$/;
    return {
        require: 'ngModel',
        link: function($scope, el, attrs, ctrl) {
            $scope.$watch(attrs.ngModel, function() {
                if(attrs.required !== undefined || el.val() !== '') {
                    var isValid = el.val().match(pattern) !== null;
                    ctrl.$setValidity('phone-number', isValid);
                } else {
                    ctrl.$setValidity('phone-number', true);
                }
            });
        }
    };
});
