import React from 'react';
import PropTypes from 'prop-types';

import ProductDetails from './DetailsComponent';
import dataFetcher from './dataFetcher';

class ProductDetailsWrapper extends React.Component {
	static propTypes = {
		staticContext: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			staticContext: this.props.staticContext,
			match: this.props.match,
			productId: this.props.match.params.id
		}
	}

	componentDidMount() {
		//called only on browser for client-side rendering
		if (!this.state.staticContext) {
			if (typeof window !== 'undefined' && window.__REACT_APP_VIEW_DATA__) {
				this.setState({
					staticContext: {data: JSON.parse(window.__REACT_APP_VIEW_DATA__)}
				});

				delete window.__REACT_APP_VIEW_DATA__;
			} else {
				dataFetcher({params: this.state.match.params})
					.then(data => this.setState({
						staticContext: { data }
					}));
			}
		}
	}

	render() {
		if (this.state.staticContext) {
			const { data } = this.state.staticContext;
			return data ? (<ProductDetails product={data}/>) : (<div></div>);
		}

		return (<div></div>);
	}
}

export default ProductDetailsWrapper;