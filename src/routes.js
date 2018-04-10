import ProductsList from './product/list';
import ProductDetails from './product/details';

export default [{
  exact: true,
  path: "/products",
  component: ProductsList,
	dataFetcher: require('./product/list/dataFetcher').default
}, {
 	exact: true,
  path: "/products/:id",
 	component: ProductDetails,
  dataFetcher: require('./product/details/dataFetcher').default
}];