import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import SignIn from './pages/Login/SignIn';
import SignUp from './pages/Login/SignUp';
import Products from './pages/Products/Products';
// import Productdetail from './pages/Products/Productdetail/Productdetail';
import Cart from './pages/Cart/Cart';
import BestItem from './pages/Products/BestItem/BestItem';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/products/:pathId" component={Products} />
          <Route exact path="/bestitem" component={BestItem} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
