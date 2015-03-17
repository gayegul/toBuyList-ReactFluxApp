"use strict";

var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var MakeupList = require('./MakeupList.react');
var MakeupForm = require('./MakeupForm.react');


var MakeupsApp = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin('MakeupStore')],

	getStateFromFlux: function() {
		return this.getFlux().store('MakeupStore').getState();
	},
	render: function() {
		return (
			<main>
			<MakeupForm />
				<MakeupList data={this.state.makeups} />
			</main>
		)
	}
});

module.exports = MakeupsApp;