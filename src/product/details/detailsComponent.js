import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AllHtmlEntities } from 'html-entities';

import priceFormat from '../../utils/priceFormat';

const entities = new AllHtmlEntities();

class ProductDetails extends React.Component {
	static propTypes = {
		product: PropTypes.object.isRequired,
		errors: PropTypes.array
	}

	static defaultProps = {
		errors: []
	}

	render() {
		const { product } = this.props;
		return (
			<div>
				<div>
          <img alt={product.name} src={product.thumbnail.href}/>
          <div className="product-name">{entities.decode(product.name)}</div>
          <div>
            {product.priceRange.regular ? (<div className="regular product-price">{priceFormat(product.priceRange.regular.low)} - {priceFormat(product.priceRange.regular.high)}</div>) : ''}
            {product.priceRange.selling ? (<div className="selling product-price">{priceFormat(product.priceRange.selling.low)} - {priceFormat(product.priceRange.selling.high)}</div>) : ''}
          </div>
        </div>
				<Link to='/products'>Back</Link>
			</div>
		);
	}
}

export default ProductDetails;