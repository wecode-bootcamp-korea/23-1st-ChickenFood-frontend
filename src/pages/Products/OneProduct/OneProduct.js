import React from 'react';

class OneProduct extends React.Component {
  render() {
    const { id, name, thumbnail, price } = this.props.products;
    return (
      <div className="product">
        <img src={thumbnail} alt="product" />
        <div className="productInfo">
          <li key={id}>{name}</li>
          <p className="productPrice">
            ₩{Number(price).toLocaleString('ko-KR')}
          </p>
        </div>
      </div>
    );
  }
}

export default OneProduct;
