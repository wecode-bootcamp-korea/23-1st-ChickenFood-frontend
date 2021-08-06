import React from 'react';
import './ProductList.scss';
import OneProduct from '../OneProduct/OneProduct';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('./data/data.json')
      .then(response => response.json())
      .then(data => {
        // console.log('mock데이터', data);

        this.setState({
          products: data,
        });
      });
    // fetch('http://10.58.4.181:8000/products/catalog')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('db 데이터', data);

    //     this.setState({
    //       products: data,
    //     });
    //   });
  };

  latestList = () => {
    fetch('http://10.58.4.181:8000/products/catalog?filter=recent')
      .then(response => response.json())
      .then(data => {
        console.log('최신순', data);
      });
  };

  render() {
    const { products } = this.state;
    // console.log('상품들', products);
    return (
      <div className="bottomContents">
        <div className="bottomTop">
          <strong>총 {products.length}개 상품</strong>
          <div className="productsSort">
            <span className="sortItem rightBar">추천순</span>
            <span className="sortItem rightBar" onClick={this.latestList}>
              최신순
            </span>
            <span className="sortItem rightBar">낮은가격순</span>
            <span className="sortItem">높은가격순</span>
          </div>
        </div>
        <div className="productsContainer">
          {products.map(el => {
            return <OneProduct key={el._id} products={el} />;
          })}
        </div>

        <div className="more">
          <button className="moreButton">100 개 더보기 ▼</button>
        </div>
      </div>
    );
  }
}

export default ProductList;
