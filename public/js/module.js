'use strict';

var app = angular.module('userMess', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('login', {
		url: '/',
		templateUrl: 'html/login.html',
		controller: 'loginCtrl'
	})
	.state('inbox', {
		url: '/',
		templateUrl: 'html/inbox.html',
		controller: 'inboxCtrl'
	})

	$urlRouterProvider.otherwise('/');
});
