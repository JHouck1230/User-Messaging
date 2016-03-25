'use strict';

var app = angular.module('userMess');

app.directive('navbar', function() {
	function link(scope, elem, attrs) {}
		return {
			restrict: 'E',
			templateUrl: '/html/navbar.html',
			scope: {},
			link: link
		}
});