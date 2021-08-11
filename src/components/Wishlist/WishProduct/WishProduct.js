import React from 'react';

class WishProduct extends React.Component {
  render() {
    // console.log(this.props);
    const { name, price, image, id, deleteButton } = this.props;
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
      </div>
    );
  }
}

export default WishProduct;
