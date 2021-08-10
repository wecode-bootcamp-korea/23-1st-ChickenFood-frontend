import React from 'react';

class WishProduct extends React.Component {
  render() {
    const { name, price, thumbnail } = this.props;
    return (
      <div class="wishCard">
        <img src={thumbnail} />
      </div>
    );
  }
}

export default WishProduct;
