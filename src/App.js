import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductsList from './product/list';
import ProductDetails from './product/details';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">West<span>Elm</span></h1>
        </header>
        <div>
          <Route exact path="/" component={ProductsList}/>
          <Route exact path="/products" component={ProductsList}/>
					<Route path="/products/:id" component={ProductDetails} />
        </div>
      </div>
    );
  }
}

export default App;
