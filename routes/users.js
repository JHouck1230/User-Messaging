'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res) {
	User.register(req.body, function(err, user) {
		res.status(err ? 400 : 200).send(err);
	});
});

router.post('/authenticate', function(req, res) {
	User.authenticate(req.body, function(err, token) {
		if(err) res.status(400).send(err);
		res.cookie('messageapp', token).send();
	});
});

router.put('/logout', function(req, res) {
	res.clearCookie('messageapp').send();
})

router.put('/updateProfile', User.authMiddleware, function(req, res) {
	User.findOneAndUpdate({username: req.body.username}, req.body, function(err, user) {
		console.log('user: ', user);
		var userData = {
			username: user.username,
			image: user.image,
			email: user.email,
			phone: user.phone
		};
		res.status(err ? 400 : 200).send(err || userData);
	});
});

router.put('/getInformation', User.authMiddleware, function(req, res) {
	User.findOne({username: req.body.username}, function(err, user) {
		if(err) return res.status(400).send(err);
		var userData = {
			username: user.username,
			image: user.image,
			email: user.email,
			phone: user.phone
		};
		res.send(userData);
	});
});

module.exports = router;
