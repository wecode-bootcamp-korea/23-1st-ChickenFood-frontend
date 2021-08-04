import React from 'react';
import BestItem from './BestItem/BestItem';
import ProductList from './ProductList/ProductList';
import './Products.scss';

class Products extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <BestItem />
        <ProductList />
        <div className="more">
          <button className="moreButton">100 개 더보기 ▼</button>
        </div>
      </div>
    );
  }
}

export default Products;
