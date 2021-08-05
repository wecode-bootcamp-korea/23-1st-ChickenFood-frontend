import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Products from './pages/Products/Products';
import Productdetail from './pages/Products/Productdetail/Productdetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/header" component={Header} /> */}
          <Route exact path="/products" component={Products} />
          <Route exact path="/productdetail" component={Productdetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
