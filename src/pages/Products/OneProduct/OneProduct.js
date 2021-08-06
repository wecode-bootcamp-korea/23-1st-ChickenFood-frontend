import React from 'react';

class OneProduct extends React.Component {
  render() {
    console.log('OneProduct!', this.props.products);
    const { _id, city, picture, price } = this.props.products;
    return (
      <div className="product">
        <li key={_id}>{city}</li>
        <img src={picture} alt="product" />
        <p>{price}</p>
      </div>
    );
  }
}

export default OneProduct;
