import React, { Component } from 'react';

export default class AuthenticatedComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>Hello from Auth</div>
		)
	}
}
