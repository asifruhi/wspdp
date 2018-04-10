import fetch from 'isomorphic-fetch';

export default function({params, props}) {
	if (props && props.product) {
	  return Promise.resolve(props.product);
	} else {
	    return fetch((process.env.REACT_APP_SERVICE_HOST || '') + '/services/catalog/v4/category/shop/new/all-new/index.json')
        .then(response => response.json())
	        .then(data => data.groups.find(product => product.id === params.id))  //TODO return only needed data to avoid storing too much data on the DOM
	}
};