import React from 'react';

export class Link extends React.Component {
	render() {
		return (
			<a href={this.props.to} role={this.props.role}>
				{this.props.children}
			</a>
		);
	}
}