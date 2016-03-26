'use strict';

var app = angular.module('userMess');

app.controller('composeCtrl', function($scope, $state, UserService) {
	UserService.getRecipients()
	.then(res => $scope.users = res.data,
				err => console.error(err));
	
	$scope.send = function(message) {
		UserService.sendMessage(message)
		.then(res => $scope.message = null,
					err => console.error(err));
	};

});