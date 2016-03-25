'use strict';

var app = angular.module('userMess');

app.service('UserService', function($http) {
	this.user;

	this.register = user => $http.post('/users/register', user);
	this.login = user => $http.post('/users/authenticate', user);
	this.updateProfile = user => $http.put('/users/updateProfile', user);
	this.grabUser = () => this.user;
	this.cookieUser = user => this.user = user;

	this.passUser = user => {
		$http.put(`/users/getInformation`, user)
		.then(res => this.user = res.data,
					err => console.error(err));
	};

});