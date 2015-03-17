"use strict";

var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var Makeup = React.createClass({
	mixins: [FluxMixin],
	handleDelete: function() {
		this.getFlux().actions.deleteMakeup(this.props.data);
	},
	render: function() {
		return <li><span>{this.props.data.color + ': '}</span>{this.props.data.brand}<button onClick={this.handleDelete}>Delete</button></li>
	}
});

module.exports = Makeup;