import React from 'react';

class BestProduct extends React.Component {
  render() {
    return (
      <div className="productImgWrap">
        <img
          src="/images/product.jpg"
          alt="product"
          className="productImg"
        ></img>
        <div className="productName">
          로열허니 프로폴리스 인리치 에센스(50ml)
        </div>
        <div className="productPrice">\32,000</div>
      </div>
    );
  }
}

export default BestProduct;
