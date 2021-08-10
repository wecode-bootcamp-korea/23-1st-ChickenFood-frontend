import React from 'react';

class WishProduct extends React.Component {
  render() {
    console.log(this.props);
    const { name, price, image, id, deleteButton } = this.props;
    return (
      <div className="wishCard">
        <img className="wishCardImage" src={image} alt="wishlist" />
        <button onClick={() => deleteButton(id)}>X</button>
        <div className="wishCardText">
          <p className="wishCardName">{name}</p>
          <p className="wishCardPrice">{price}</p>
        </div>
      </div>
    );
  }
}

export default WishProduct;
