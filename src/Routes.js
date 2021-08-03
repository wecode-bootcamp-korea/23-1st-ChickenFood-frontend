import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Header from './pages/Header/Header';
import SignIn from './pages/Login/SignIn';
import SignUp from './pages/Login/SignUp';
import Products from './pages/Products/Products';
import Productdetail from './pages/Products/Productdetail/Productdetail';

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
