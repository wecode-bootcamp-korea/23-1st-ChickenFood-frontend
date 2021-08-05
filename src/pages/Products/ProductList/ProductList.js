import React from 'react';
import './ProductList.scss';
import OneProduct from './OneProduct/OneProduct';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.staet = {
      products: {},
    };
  }

  componentDidMount() {
    fetch('./data/data.json')
      .then(response => response.json())
      .then(data => {
        console.log('mock데이터', data);

        this.setState({
          products: data,
        });
      });
  }

  render() {
    return (
      <div className="bottomContents">
        <div className="bottomTop">
          <strong>총 200개 상품</strong>
          <div className="productsSort">
            <span className="sortItem rightBar">추천순</span>
            <span className="sortItem rightBar">최신순</span>
            <span className="sortItem rightBar">낮은가격순</span>
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
