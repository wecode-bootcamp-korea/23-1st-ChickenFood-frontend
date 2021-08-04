import React from 'react';
import './ProductList.scss';
import OneProduct from './OneProduct/OneProduct';

class ProductList extends React.Component {
  render() {
    return (
      <div className="bottomContents">
        <div className="bottomTop">
          <strong>총 200개 상품</strong>
          <div className="productsSort">
            <span className="sortItem">최신순</span>
            <span className="sortItem">낮은가격순</span>
            <span className="sortItem">높은가격순</span>
          </div>
        </div>
        <div className="productsContainer">
          <OneProduct />
        </div>
      </div>
    );
  }
}

export default ProductList;
