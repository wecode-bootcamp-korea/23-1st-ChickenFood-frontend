import React from 'react';

class WishProduct extends React.Component {
  render() {
    // console.log(this.props);
    const { name, price, image, id, deleteButton, pushCart } = this.props;
    return (
      <div className="wishCard">
        <img className="wishCardImage" src={image} alt="wishlist" />
        <div className="wishCardText">
          <p className="wishCardName">{name}</p>
          <p className="wishCardPrice">{price}</p>
        </div>
        <span
          className="wishCardDelete"
          onClick={() => deleteButton(id)}
        ></span>
        <div>
          <button onClick={() => pushCart(id)}>장바구니에 넣기</button>
        </div>
      </div>
    );
  }
}

export default WishProduct;
