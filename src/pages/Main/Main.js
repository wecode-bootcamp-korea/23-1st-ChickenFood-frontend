import React from 'react';
import Wishlist from '../../components/Wishlist/Wishlist';
import WishButton from '../../components/WishButton/WishButton';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Wishlist />
        <WishButton />
      </div>
    );
  }
}

export default Main;
