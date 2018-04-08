import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AllHtmlEntities } from 'html-entities';

import priceFormat from '../../utils/priceFormat';
import './DetailsComponent.css';

const entities = new AllHtmlEntities();

class ProductDetails extends React.Component {
	static propTypes = {
		product: PropTypes.object.isRequired,
		errors: PropTypes.array
	}

	static defaultProps = {
		errors: []
	}

	constructor(props) {
		super(props);

		this.showAltImages = this.showAltImages.bind(this);
	}

	showAltImages() {
		
	}

	render() {
		const { product } = this.props;
		return (
			<div>
				<Link to='/products' className="all-products-link">View All Products</Link>
				<div className="product-detail-container">
          <img alt={product.name} src={product.hero.href} onClick={this.showAltImages()}/>
          <div className="product-detail">
	          <h1>{entities.decode(product.name)}</h1>
	          <div>
	            {product.priceRange.regular ? (<div className="regular product-price">Regular Price: {priceFormat(product.priceRange.regular.low)} - {priceFormat(product.priceRange.regular.high)}</div>) : ''}
	            {product.priceRange.selling ? (<div className="selling product-price">Selling Price: {priceFormat(product.priceRange.selling.low)} - {priceFormat(product.priceRange.selling.high)}</div>) : ''}
	          </div>
	         </div>
        </div>
			</div>
		);
	}
}

export default ProductDetails;