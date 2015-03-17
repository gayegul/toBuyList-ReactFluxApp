"use strict";

var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var request = require('superagent');

var baseUrl = '/api/v1/makeups';

var constants = {
	ADD_MAKEUP: 'ADD_MAKEUP',
	TOGGLE_EDIT_MAKEUP: 'TOGGLE_EDIT_MAKEUP',
	UPDATE_MAKEUP: 'UPDATE_MAKEUP',
	REMOVE_MAKEUP: 'REMOVE_MAKEUP'
};

var MakeupStore = Fluxxor.createStore({
	initialize: function() {
		this.makeups = [];

		this.bindActions(
			constants.ADD_MAKEUP, this.onNewMakeup,
			constants.REMOVE_MAKEUP, this.onRemoveMakeup
		);
		
		request
			.get(baseUrl)
			.end(function(err, res) {
				if(err) return console.log(err);

				this.makeups = res.body;
				this.emit('change');
			}.bind(this));
	},

	onNewMakeup: function(makeup) {
		request
			.post(baseUrl)
			.send(makeup)
			.end(function(err, res) {
				if(err) return console.log(err);

				this.makeups.push(res.body);
				this.emit('change');
			}.bind(this));
	},

	onRemoveMakeup: function(makeup) {
		request
		.del(baseUrl + '/' + makeup._id)
		.end(function(err, res) {
			if (err) return console.log(err);

			this.makeups.splice(this.makeups.indexOf(makeup), 1);
			this.emit('change');
		}.bind(this));
	},

	getState: function() {
		return {makeups: this.makeups};
	}
});

module.exports = MakeupStore;