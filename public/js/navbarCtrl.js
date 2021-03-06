'use strict';

var app = angular.module('userMess');

app.controller('navbarCtrl', function($scope, $state, UserService) {
	$scope.logout = function(user) {
		UserService.logout(user)
		.then(res => {
			UserService.destroy();
			$state.go('login');
		}, err => console.error(err));
	};
});