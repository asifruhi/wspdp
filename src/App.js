import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container" role="main">
        <header className="app-header">
          <h1 className="app-title" role="banner" tabIndex="1">West<span>Elm</span></h1>
        </header>
        <div>
        {routes.map(({path, exact, component: Comp}) => <Route key={path} path={path} exact={exact} render={props => (<Comp {...props}/>)}/>)}
        </div>
      </div>
    );
  }
}

export default App;
