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
		url: '/inbox',
		templateUrl: 'html/inbox.html',
		controller: 'inboxCtrl'
	})
	.state('compose', {
		url: '/compose',
		templateUrl: 'html/compose.html',
		controller: 'composeCtrl'
	})
	.state('profile', {
		url: '/profile',
		templateUrl: 'html/profile.html',
		controller: 'profileCtrl'
	})

	$urlRouterProvider.otherwise('/');
});

app.run(function($http, $state, UserService) {
	$http.get('/protected')
	.then(res => {
		UserService.cookieUser(res.data);
		$state.go('inbox');
	}, err => console.error(err));
});
