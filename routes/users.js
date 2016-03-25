var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use(User.authMiddleware);



module.exports = router;
