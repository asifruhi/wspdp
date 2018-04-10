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
		products: PropTypes.array.isRequired
	}

	render() {
		return this.props.products ? (
			<div>
				<h3 className="page-title" tabIndex="2">{this.props.title}</h3>
				<ul className="pure-g products-list" role="grid">
					{
						this.props.products.map(product => (
								<li key={product.id} className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4 product" role="gridcell">
									<Link to={'/products/' + product.id} role="link">
										<div>
											<img alt={'image for ' + product.name} src={product.thumbnail.href}/>
											<div className="product-name" aria-label={"Product Name is " + entities.decode(product.name)}>{entities.decode(product.name)}</div>
											<div>
												{product.priceRange.regular ? (<div className="regular product-price"
													aria-label={"Regular price range is " + priceFormat(product.priceRange.regular.low) + " to " + priceFormat(product.priceRange.regular.high)}>
														{priceFormat(product.priceRange.regular.low)} - {priceFormat(product.priceRange.regular.high)}</div>) : ''}
												{product.priceRange.selling ? (<div className="selling product-price"
													aria-label={"Selling price range is " + priceFormat(product.priceRange.selling.low) + " to " + priceFormat(product.priceRange.selling.high)}>
														{priceFormat(product.priceRange.selling.low)} - {priceFormat(product.priceRange.selling.high)}</div>) : ''}
											</div>
										</div>
									</Link>
								</li>
							)
						)
					}
				</ul>
			</div>
		) : (<div></div>);
	}
}


export default ProductsList;