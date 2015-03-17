'use strict';

var mongoose = require('mongoose');

var makeupSchema = new mongoose.Schema({
	brand: String,
	type: {type: String, default: 'Chanel'},
	color: {type: String, default: 'Red'}
});

module.exports = mongoose.model('Makeup', makeupSchema);