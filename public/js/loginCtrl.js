'use strict';

var app = angular.module('userMess');

app.controller('loginCtrl', function($scope, $state, UserService) {
	$scope.login = function(user) {
		UserService.login(user)
		.then(res => {
			UserService.passUser(user)
			$state.go('inbox');
		}, err => {
			$state.go('login');
			console.error(err);
		})
	}

	$scope.register = function(user) {
		if(user.password !== user.confirmPass) return;
		UserService.register(user)
		.then(res => {
			UserService.passUser(user)
			$state.go('inbox');
		}, err => {
			$state.go('login');
			console.error(err);
		})
	};

});