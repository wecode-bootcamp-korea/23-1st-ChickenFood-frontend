import React from 'react';
import './BestProduct.scss';

class BestProduct extends React.Component {
  render() {
    const { id, imgsrc, product, price } = this.props;
    return (
      <li className="productImgWrap" key={id}>
        <div className="productImgBox">
          <img src={imgsrc} alt="product" className="productImg" />
        </div>
        <div className="productName">{product}</div>
        <div className="productPrice">{price}</div>
      </li>
    );
  }
}

export default BestProduct;
