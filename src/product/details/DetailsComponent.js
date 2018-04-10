import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AllHtmlEntities } from 'html-entities';

import Carousel from 'nuka-carousel';

import priceFormat from '../../utils/priceFormat';
import Overlay from '../../common/Overlay';

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
		this.overlay.show();
	}

	render() {
		const { product } = this.props;
		return product ? (
			<div>
				<Link to='/products' className="all-products-link">View All Products</Link>
				<div className="pure-g product-detail-container" role="article">
					<div className="pure-u-1 pure-u-md-1-2 product-image">
            <img alt={product.name} src={product.hero.href} onClick={this.showAltImages} tabIndex="5"/>
          </div>
          <div className="pure-u-1 pure-u-md-1-2">
            <div className="product-detail">
		          <h1 tabIndex="2">{entities.decode(product.name)}</h1>
		          <div role="contentinfo">
		            {product.priceRange.regular ? (<div className="regular product-price" tabIndex="3">Regular Price: {priceFormat(product.priceRange.regular.low)} - {priceFormat(product.priceRange.regular.high)}</div>) : ''}
		            {product.priceRange.selling ? (<div className="selling product-price" tabIndex="4">Selling Price: {priceFormat(product.priceRange.selling.low)} - {priceFormat(product.priceRange.selling.high)}</div>) : ''}
		          </div>
		        </div>
	         </div>
        </div>
        <Overlay ref={el => this.overlay = el}>
					<Carousel className="images-overlay">
						<img key='img0' alt={product.name} src={product.hero.href}/>
						{
							product.images.map((image, idx) => <img alt={product.name} key={'img' + (idx + 1)} src={image.href}/>)
						}
					</Carousel>
        </Overlay>
			</div>
		) : (<div></div>);
	}
}

export default ProductDetails;