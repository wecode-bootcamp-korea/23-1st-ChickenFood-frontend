import React from 'react';
import './ProductList.scss';
import OneProduct from '../OneProduct/OneProduct';
import '../../../config.js';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      viewProduct: [],
      moreView: 4,
      moreButtonHidden: false,
      selectedSort: 1,
    };
  }

  componentDidMount() {
    this.getData();
  }

  moreProduct = () => {
    const { products, viewProduct, moreView } = this.state;
    console.log(
      '전체상품 : ',
      products.length,
      '현재상품 :',
      viewProduct.length,
      '남은 상품 :',
      products.length - viewProduct.length
    );
    let remainProduct = [];
    let count = 0;
    let moreViewProduct = [];
    if (products.length - viewProduct.length > 4) {
      for (let i = viewProduct.length; i < viewProduct.length + moreView; i++) {
        remainProduct[count] = products[i];
        count++;
      }
      moreViewProduct = [...viewProduct, ...remainProduct];
    } else {
      for (let i = viewProduct.length; i < products.length; i++) {
        remainProduct[count] = products[i];
        count++;
      }
      moreViewProduct = [...viewProduct, ...remainProduct];
      this.setState({
        moreButtonHidden: true,
      });
    }
    this.setState({
      viewProduct: moreViewProduct,
    });
    count = 0;
  };

  getData = () => {
    fetch('./data/data.json')
      .then(response => response.json())
      .then(data => {
        let product = [];
        for (let i = 0; i < 4; i++) {
          product[i] = data[i];
        }
        this.setState({
          products: data,
          viewProduct: product,
        });
      });
  };

  handleSorting = api => {
    fetch(`./data/${api}.json`)
      .then(response => response.json())
      .then(data => {});
    if (api === 'bestProduct1') {
      console.log('추천순');
      this.setState({
        selectedSort: 1,
      });
    } else if (api === 'bestProduct2') {
      console.log('최신순');
      this.setState({
        selectedSort: 2,
      });
    } else if (api === 'bestProduct3') {
      console.log('낮은가격순');
      this.setState({
        selectedSort: 3,
      });
    } else if (api === 'bestProduct4') {
      console.log('높은가격순');
      this.setState({
        selectedSort: 4,
      });
    }
  };

  render() {
    const { products, viewProduct, moreButtonHidden } = this.state;
    console.log(this.state.selectedSort);
    // console.log('초기 뷰리스트', this.state.viewProduct);
    // console.log('상품', products[0]);
    return (
      <div className="bottomBackground">
        <div className="bottomContents">
          <div className="bottomTop">
            <strong>총 {products.length}개 상품</strong>
            <div className="productsSort">
              <span
                className={
                  this.state.selectedSort === 1
                    ? 'sortItem rightBar selected'
                    : 'sortItem rightBar'
                }
                onClick={() => this.handleSorting('bestProduct1')}
              >
                추천순
              </span>
              <span
                className={
                  this.state.selectedSort === 2
                    ? 'sortItem rightBar selected'
                    : 'sortItem rightBar'
                }
                onClick={() => this.handleSorting('bestProduct2')}
              >
                최신순
              </span>
              <span
                className={
                  this.state.selectedSort === 3
                    ? 'sortItem rightBar selected'
                    : 'sortItem rightBar'
                }
                onClick={() => this.handleSorting('bestProduct3')}
              >
                낮은가격순
              </span>
              <span
                className={
                  this.state.selectedSort === 4
                    ? 'sortItem selected'
                    : 'sortItem'
                }
                onClick={() => this.handleSorting('bestProduct4')}
              >
                높은가격순
              </span>
            </div>
          </div>
          <div className="productsContainer">
            <div className="productsBox">
              {viewProduct.map(el => {
                return <OneProduct key={el._id} products={el} />;
              })}
            </div>
          </div>

          {!moreButtonHidden && (
            <div>
              <button className="moreButton" onClick={this.moreProduct}>
                더보기
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductList;
