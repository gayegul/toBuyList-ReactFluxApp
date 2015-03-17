"use strict";

var React = require('react');
var Makeup = require('./Makeup.react')

var MakeupList = React.createClass({
	render: function() {
		var makeups = this.props.data.map(function(makeup) {
			return <Makeup data={makeup} key={makeup._id} />
		});
		return (
			<section>
				<h1>Makeups:</h1>
				<ul>
					{makeups}
				</ul>
			</section>
		)
	}
});

module.exports = MakeupList;