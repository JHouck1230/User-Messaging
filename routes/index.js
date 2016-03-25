var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res) {
	User.register(req.body, function(err, user) {
		res.status(err ? 400 : 200).send(err);
	});
});

router.use(User.authMiddleware);


module.exports = router;
