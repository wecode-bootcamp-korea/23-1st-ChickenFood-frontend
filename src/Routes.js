import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './pages/header/Header';
import Main from './pages/main/Main';
import Products from './pages/products/Products';
import Productdetail from './pages/products/productdetail/Productdetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/productdetail" component={Productdetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
