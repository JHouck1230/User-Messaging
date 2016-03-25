'use strict';

var app = angular.module('userMess');

app.controller('profileCtrl', function($scope, $state, UserService) {
	$scope.userEditing = false;
	$scope.user = UserService.grabUser();
	$scope.editUser = () => $scope.userEditing = true;

	$scope.updateProfile = user => {
		$scope.userEditing = false;
		UserService.updateProfile(user)
		.then(res => {
			console.log('res.data: ', res.data);
			$scope.user = res.data
		},
					err => console.error(err));
	};
});