import React from 'react';
import { withRouter } from 'react-router';
import OneProduct from '../OneProduct/OneProduct';
import './ProductList.scss';
import { PRODUCTS } from '../../../config.js';

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
    const remainProduct = [];
    let moreViewProduct = [];
    if (products.length - viewProduct.length > 4) {
      for (let i = viewProduct.length; i < viewProduct.length + moreView; i++) {
        remainProduct.push(products[i]);
      }
      moreViewProduct = [...viewProduct, ...remainProduct];
    } else {
      for (let i = viewProduct.length; i < products.length; i++) {
        remainProduct.push(products[i]);
      }
      moreViewProduct = [...viewProduct, ...remainProduct];
      this.setState({
        moreButtonHidden: true,
      });
    }
    this.setState({
      viewProduct: moreViewProduct,
    });
  };

  getData = () => {
    let id = 1;
    console.log(`${PRODUCTS}${this.props.match.params.pathId}${id}`);

    console.log(this.props.match.params);

    // fetch(`${PRODUCTS}${this.props.match.params.pathId}${id}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({
    //       products: data.items,
    //       viewProduct: data.items.slice(0, 4),
    //     });
    //   });

    // fetch('./data/data.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({
    //       products: data.items,
    //       viewProduct: data.items.slice(0, 4),
    //     });
    //   });
  };

  handleSorting = api => {
    fetch('./data/data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data,
        });
      });
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

export default withRouter(ProductList);
