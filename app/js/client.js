"use strict";

var React = require('react');
var Fluxxor = require('fluxxor');
var MakeupList = require('../../lib/MakeupList.react');
var Makeup = require('../../lib/Makeup.react');
var MakeupsApp = require('../../lib/MakeupsApp.react');
var MakeupStore = require('../../lib/MakeupStore.flux');

var constants = {
	ADD_MAKEUP: 'ADD_MAKEUP',
	TOGGLE_EDIT_MAKEUP: 'TOGGLE_EDIT_MAKEUP',
	UPDATE_MAKEUP: 'UPDATE_MAKEUP',
	REMOVE_MAKEUP: 'REMOVE_MAKEUP'
};

var actions = {
	addMakeup: function(makeup) {
		this.dispatch(constants.ADD_MAKEUP, makeup);
	},

	deleteMakeup: function(makeup) {
		this.dispatch(constants.REMOVE_MAKEUP, makeup);
	}
};

var stores = {
	MakeupStore: new MakeupStore()
};

var flux = new Fluxxor.Flux(stores, actions);

React.render(<MakeupsApp flux={flux}/>, document.body);
