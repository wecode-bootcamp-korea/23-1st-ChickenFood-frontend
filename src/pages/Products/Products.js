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
      </div>
    );
  }
}

export default Products;
