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
          <p className="wishCardPrice">₩{Number(price).toLocaleString()}</p>
        </div>
        <span
          className="wishCardDelete"
          onClick={() => deleteButton(id)}
        ></span>
        <div>
          <button className="wishBtn" onClick={() => pushCart(id)}>
            장바구니에 넣기
          </button>
        </div>
      </div>
    );
  }
}

export default WishProduct;
