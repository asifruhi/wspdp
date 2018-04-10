import React from 'react';
import PropTypes from 'prop-types';

import ProductsList from './ListComponent';
import dataFetcher from './dataFetcher';

class ListWrapper extends React.Component {
	static propTypes = {
		staticContext: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.state = {
			staticContext: this.props.staticContext,
			title: '',
			products: []
		}
	}

	componentDidMount() {
		//called only on browser for client-side rendering
		if (!this.state.staticContext) {
			if (typeof window !== 'undefined' && window.__REACT_APP_VIEW_DATA__) {
				this.setState({
					staticContext: {data: JSON.parse(window.__REACT_APP_VIEW_DATA__)}
				});

				delete window.__REACT_APP_VIEW_DATA__;
			} else {
        dataFetcher()
          .then(data => this.setState({
            staticContext: { data }
          }));
      }
		}
	}

	render() {
		if (this.state.staticContext) {
			const { data } = this.state.staticContext;
			return (<ProductsList title={data.name} products={data.groups} />);
		}

		return (<div></div>);
	}
}

export default ListWrapper;