'use strict';
/*jshint -W097*/
/*jshint strict:false*/
/*global $:false, module*/
var focusOn = ['$timeout', function ($timeout) {
    /*jslint unparam: true*/
    return {
        restrict: 'A',
        link: function (scope, elem, attr) {
            scope.$on(attr.focusOn, function (e) {
                $timeout(function () { elem[0].focus(); });
            });
        }
    };
}];

module.exports = focusOn;