'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');

const JWT_SECRET = 'secret';

var User;

var userSchema = new mongoose.Schema({
	username: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	image: String,
	email: String,
	phone: String
});

userSchema.statics.register = function(userObj, hollaback) {
	console.log('user.register');
	User.findOne({username: userObj.username}, function(err, user) {
		bcrypt.hash(userObj.password, 10, function(err, hash) {
			if(err) return hollaback(err);
			User.create({
				username: userObj.username,
				password: hash
			}, function(err) {
				hollaback(err);
			});
		});
	});
};

userSchema.statics.authenticate = function(userObj, hollaback) {
	User.findOne({username: userObj.username}, function(err, dbUser) {
		if(err || !dbUser) return hollaback('Authentication failed.');
		bcrypt.compare(userObj.password, dbUser.password, function(err, isGood) {
			if(err || !isGood) return hollaback('Authentication failed.');
			var payload = {
				userId: dbUser._id,
				iat: Date.now()
			};
			var token = jwt.encode(payload, JWT_SECRET);
			hollaback(null, token);
		});
	});
};

userSchema.statics.authMiddleware = function(req, res, next) {
	var token = req.cookies.messageapp
	try {
		var payload = jwt.decode(token, JWT_SECRET);
	} catch(e) {
		return res.clearCookie('messageapp').status(401).send("Unauthorized!");
	}
	User.findById(payload.userId).select({password: 0}).exec(function(err, user) {
		if(err || !user) return res.clearCookie('messageapp').status(400).send(err);
		req.user = user;
		next();
	});
};

User = mongoose.model('User', userSchema);

module.exports = User;