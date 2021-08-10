import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from './pages/Login/SignIn';
import Main from './pages/Main/Main';
import Products from './pages/Products/Products';
import Productdetail from './pages/Products/Productdetail/Productdetail';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/" component={Main} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/productdetail" component={Productdetail} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;
