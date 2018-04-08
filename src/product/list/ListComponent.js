import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AllHtmlEntities } from 'html-entities';

import priceFormat from '../../utils/priceFormat';
import './ListComponent.css';

const entities = new AllHtmlEntities();

class ProductsList extends React.Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		products: PropTypes.array.isRequired,
		errors: PropTypes.array
	}

	static defaultProps = {
		errors: []
	}

	render() {
		return (
			<div>
				<h3 className="page-title">{this.props.title}</h3>
				<div className='errors'>
					{this.props.errors.map(e => (<div>e</div>))}
				</div>
				<ul className="pure-g products-list">
					{
						this.props.products.map(product => (
								<li key={product.id} className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4 product">
									<Link to={'/products/' + product.id}>
										<div>
											<img alt={product.name} src={product.thumbnail.href}/>
											<div className="product-name">{entities.decode(product.name)}</div>
											<div>
												{product.priceRange.regular ? (<div className="regular product-price">{priceFormat(product.priceRange.regular.low)} - {priceFormat(product.priceRange.regular.high)}</div>) : ''}
												{product.priceRange.selling ? (<div className="selling product-price">{priceFormat(product.priceRange.selling.low)} - {priceFormat(product.priceRange.selling.high)}</div>) : ''}
											</div>
										</div>
									</Link>
								</li>
							)
						)
					}
				</ul>
			</div>
		);
	}
}


export default ProductsList;