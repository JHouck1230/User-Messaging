'use strict';

var app = angular.module('userMess');

app.controller('loginCtrl', function($scope, $state, UserService) {
	$scope.login = function(user) {
		UserService.login(user)
		.then(res => {
			$state.go('inbox')
			console.log('res: ', res);
		}, err => console.error(err))
	}

	$scope.register = function(user) {
		UserService.register(user)
		.then(res => {
			console.log('res: ', res);
		}, err => console.error(err))
	};

});