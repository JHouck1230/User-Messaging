'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/protected', User.authMiddleware, function(req, res) {
		var userData = {
			username: req.user.username,
			image: req.user.image,
			email: req.user.email,
			phone: req.user.phone
		};
	res.send(userData);
});

module.exports = router;
