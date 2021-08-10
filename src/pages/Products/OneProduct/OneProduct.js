import React from 'react';

class OneProduct extends React.Component {
  render() {
    const { _id, city, picture, price } = this.props.products;
    return (
      <div className="product">
        <img src={picture} alt="product" />
        <div className="productInfo">
          <li key={_id}>{city}</li>
          <p className="productPrice">₩{price.toLocaleString()}</p>
        </div>
      </div>
    );
  }
}

export default OneProduct;
