import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import priceFormat from '../../utils/priceFormat';

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
				<h3>{this.props.title}</h3>
				<div className='errors'>
					{this.props.errors.map(e => (<div>e</div>))}
				</div>
				<ul>
					{
						this.props.products.map(product => (
								<li key={product.id}>
									<Link to={'/products/details/' + product.id}>
										<div>
											<img alt={product.name} src={product.thumbnail.href} height={product.height} width={product.width}/>
											<div>{product.name}</div>
											<div>
												{product.priceRange.regular ? (<div className='regular'>{priceFormat(product.priceRange.regular.low)} - {priceFormat(product.priceRange.regular.high)}</div>) : ''}
												{product.priceRange.selling ? (<div className='selling'>{priceFormat(product.priceRange.selling.low)} - {priceFormat(product.priceRange.selling.high)}</div>) : ''}
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