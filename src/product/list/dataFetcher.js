import fetch from 'isomorphic-fetch';

export default function() {
	return fetch((process.env.REACT_APP_SERVICE_HOST || '') + '/services/catalog/v4/category/shop/new/all-new/index.json')
			.then(response => response.json()); //TODO return only needed data to avoid storing too much data on the DOM
}