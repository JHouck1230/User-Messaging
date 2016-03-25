'use strict';

var app = angular.module('userMess');

app.service('UserService', function($http) {
	this.register = user => $http.post('/users/register', user);
	this.login = user => $http.post('/users/authenticate', user);
	this.updateProfile = user => $http.put('/users/updateProfile', user);
});