import React from 'react';
import PropTypes from 'prop-types';

import ProductDetails from './detailsComponent';

class ProductDetailsWrapper extends React.Component {
	static propTypes = {
		product: PropTypes.object
	};

	static defaultProps = {
		product: null
	};

	constructor(props) {
		super(props);

		this.state = {
			product: this.props.product,
			productId: this.props.match.params.id,
			errors: []
		}
	}

	componentDidMount() {
		if (!this.props.product) {
			fetch('/services/catalog/v4/category/shop/new/all-new/index.json')
	      .then(response => response.json())
	      .then(data => {
	        this.setState({
	          product: data.groups.find(product => product.id === this.state.productId)
	        });
	      })
	      .catch(e => {
	        this.setState({
	          errors: ['Error loading products from API server']
	        });
	        console.log('Error loading products:', e);
	      });
		}
	}

	render() {
		const { product, errors } = this.state;
		return product ? (<ProductDetails product={product} errors={errors}/>) : (<div></div>);
	}
}

export default ProductDetailsWrapper;