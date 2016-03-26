'use strict';

var express = require('express');
var router = express.Router();

var Message = require('../models/message');
var User = require('../models/user');

router.get('/', User.authMiddleware, function(req, res, next) {
	Message.find({sender: {$ne: req.user.username}}, function(err, inbox) {
		res.status(err ? 400 : 200).send(err || inbox);
	});
});

router.post('/', function(req, res) {
	Message.create(req.body, function(err){
		res.status(err ? 400 : 200).send(err);
	});
});

router.use(User.authMiddleware);



module.exports = router;
