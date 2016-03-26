'use strict';

var app = angular.module('userMess');

app.service('UserService', function($http) {
	this.user;

	this.destroy = () => this.user = null;
	this.register = user => $http.post('/users/register', user);
	this.login = user => $http.post('/users/authenticate', user);
	this.getRecipients = () => $http.get('/users/recipients');
	this.logout = user => $http.put('/users/logout', user);
	this.updateProfile = user => $http.put('/users/updateProfile', user);
	this.grabUser = () => this.user;
	this.cookieUser = user => this.user = user;
	this.passUser = user => {
		$http.put(`/users/getInformation`, user)
		.then(res => this.user = res.data,
					err => console.error(err));
	};

	this.getInbox = () => $http.get('/messages');
	this.sendMessage = message => {
		message.receiver = message.receiver._id;
		message.sender = this.user.username;
		return $http.post('/messages', message);
	}

});