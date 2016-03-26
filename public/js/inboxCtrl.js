'use strict';

var app = angular.module('userMess');

app.controller('inboxCtrl', function($scope, UserService) {
	UserService.getInbox()
	.then(res => $scope.inbox = res.data,
				err => console.error(err));
});