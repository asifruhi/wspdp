import React from 'react';
import renderer from 'react-test-renderer';

import DetailsComponent from './DetailsComponent';

it('renders product details correctly', () => {
	const product = {
		id: "metallic-square-lanterns-d5161",
		name: "Metallic Square Lanterns",
		priceRange:{
			regular: {high:149,low:24},
			selling:{high:111,low:18},
			type:"special"
		},
		hero:{
			href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201810/0031/metallic-square-lanterns-m.jpg"
		},
		images:[{
			href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201810/0031/metallic-square-lanterns-1-m.jpg"
		}, {
			href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201811/0001/metallic-square-lanterns-m.jpg"
		}]
	};
  const tree = renderer
    .create(<DetailsComponent product={product}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});