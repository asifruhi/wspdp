import React from 'react';
import renderer from 'react-test-renderer';

import ListComponent from './ListComponent';

it('renders products list correctly', () => {
	const products = [{
		id: "metallic-square-lanterns-d5161",
		name: "Metallic Square Lanterns",
		priceRange:{
			regular: {high:149,low:24},
			selling:{high:111,low:18},
			type:"special"
		},
		thumbnail:{
			href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201810/0031/metallic-square-lanterns-m.jpg"
		}
	}, {
    id: "terrace-lanterns-d5183",
    name: "Terrace Lanterns",
    priceRange:{
      regular: {high:44,low:39},
      selling:{high:44,low:29},
      type:"special"
    },
    thumbnail:{
      href: "https://www.westelm.com/weimgs/ab/images/wcm/products/201808/0047/gold-glass-candleholders-m.jpg"
    }
  }]
  const tree = renderer
    .create(<ListComponent title="Some Products" products={products}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});