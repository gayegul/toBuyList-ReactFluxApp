"use strict";

var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var MakeupForm = React.createClass({
	mixins: [FluxMixin],
	getInitialState: function() {
		return {newMakeup: {brand: ''}};
	},
	handleChange: function(event) {
		event.preventDefault();

		var stateCopy = this.state;
		if(event.target.name === 'new-makeup-brand')
			stateCopy.newMakeup.brand = event.target.value;
		if(event.target.name === 'new-makeup-color')
			stateCopy.newMakeup.color = event.target.value;

		this.setState(stateCopy);
	},
	handleSubmit: function(event) {
		event.preventDefault();

		this.getFlux().actions.addMakeup(this.state.newMakeup);
		this.setState({newMakeup: {brand: ''}});
	},
	render: function() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="new-makeup-brand">New Makeup</label>
				<input id="new-makeup-brand" type="text" value={this.state.newMakeup.brand} onChange={this.handleChange} name="new-makeup-brand" />
				<label htmlFor="new-makeup-color">Your Color:</label>
				<input id="new-makeup-color" type="text" value={this.state.newMakeup.color} onChange={this.handleChange} name="new-makeup-color" />
				<button type="submit">Create New Makeup</button>
			</form>
		)
	}
});

module.exports = MakeupForm;