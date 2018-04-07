import React from 'react';
import ProductsList from './listComponent';

class ListWrapper extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			products: [],
			errors: []
		}
	}

	componentDidMount() {
		fetch('/services/catalog/v4/category/shop/new/all-new/index.json')
			.then(response => response.json())
			.then(data => {
				this.setState({
					title: data.name,
					products: data.groups
				});
			})
			.catch(e => {
				this.setState({
					errors: ['Error loading products from API server']
				});
				console.log('Error loading products:', e);
			});
	}

	render() {
		const { title, products, errors } = this.state;
		return (<ProductsList title={title} products={products} errors={errors}/>);
	}
}

export default ListWrapper;