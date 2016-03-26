'use strict';

var mongoose = require('mongoose');

const JWT_SECRET = 'secret';

var Message;

var messageSchema = new mongoose.Schema({
	sender: { type: String, required: true },
	receiver: { type: String, required: true },
	subject: {type: String, required: true},
	body: { type: String, required: true }
});

Message = mongoose.model('Message', messageSchema);

module.exports = Message;