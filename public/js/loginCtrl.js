'use strict';

var app = angular.module('userMess');

app.controller('loginCtrl', function($scope, $state, UserService) {
	$scope.login = user => {
		UserService.login(user)
		.then(res => $state.go('inbox'),
			err => {
				$state.go('login');
				console.error(err);
		});
	};

	$scope.register = user => {
		UserService.register(user)
		.then(res => $state.go('inbox'), 
			err => {
				$state.go('login');
				console.error(err);
		});
	};

});