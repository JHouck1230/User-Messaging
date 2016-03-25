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

router.put('/updateProfile', User.authMiddleware, function(req, res) {
	User.findByIdAndUpdate(req.body._id, req.body, function(err, user) {
		res.status(err ? 400 : 200).send(err || user);
	});
});

module.exports = router;
