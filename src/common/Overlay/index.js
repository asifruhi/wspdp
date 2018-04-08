import React from 'react';
import PropTypes from 'prop-types';

import './Overlay.css';

class Overlay extends React.Component {
	static propTypes = {
		children: PropTypes.element
	}

	static defaultProps = {
		children: null
	}

	constructor(props) {
		super(props);

		this.hide = this.hide.bind(this);

		this.state = {
			showing: false
		}
	}

	hide(e) {
		e.preventDefault();

		this.setState({
			showing: false
		});
	}

	show() {
		this.setState({
			showing: true
		})
	}

	render() {
		const { showing } = this.state;
		const content = showing ? (
				<div>
					<div className="overlay-container">
						{this.props.children}
					</div>
					<div className="overlay-background" onClick={(e) => this.hide(e)}></div>
					<div className="overlay-close" onClick={(e) => this.hide(e)}></div>
				</div>
			) : (<div></div>);

		return content;
	}
}

export default Overlay;