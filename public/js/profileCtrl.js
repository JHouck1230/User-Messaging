'use strict';

var app = angular.module('userMess');

app.controller('profileCtrl', function($scope, $state, UserService) {
	$scope.updateProfile = user => {
		UserService.updateProfile(user)
		.then(res => $scope.user = res.data,
					err => console.error(err));
	};
});