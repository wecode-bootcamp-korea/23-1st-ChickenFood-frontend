import React, { Component } from 'react';
import './SectionFour.scss';

export class SectionFour extends Component {
  constructor() {
    super();
    this.state = {
      quantity: '',
    };
  }

  render() {
    let { quantity } = this.state;
    return (
      <div>
        <div className="sectionFour section">
          {this.props.emptyList.map((item, index) => {
            quantity = item.quantity;
            return (
              <div className="selectedProduct" key={index}>
                <div className="selectedProductName">
                  <span className="contentsTitle">{item.type}</span>
                  <img
                    onClick={() => this.props.deleteList(item.id)}
                    className="close"
                    src="./images/close-cross-symbol-in-a-circle.png"
                    alt="close"
                    value={item.type}
                  />
                </div>

                <div className="plusAndMinusWrapper">
                  <span className="plusAndMinuss">
                    <img
                      id={item.id}
                      onClick={this.props.countMinus}
                      className="plusAndMinus"
                      src="./images/minus.png"
                      alt="minus"
                    />
                    <span id={this.props.typeId} className="quantity">
                      {item.quantity}
                    </span>
                    <img
                      id={item.id}
                      onClick={this.props.count}
                      className="plusAndMinus"
                      src="./images/plus.png"
                      alt="plus"
                    />
                  </span>

                  <span>
                    <span className="plusAndMinusPrice">
                      ₩{Math.floor(this.props.price).toLocaleString('ko-KR')}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
          {/* 수량조절/합계금액 영역 */}
          <div className="productTotal">
            <span className="quantityWrapper">
              <span className="contentsTitle">합계</span>
            </span>
            <span className="totalAmount">
              ₩{Math.floor(this.props.price * quantity).toLocaleString('ko-KR')}
            </span>
          </div>
          <div className="BtnsWrapper">
            <button className="putInCart">장바구니 담기</button>
            <button className="olderNow">바로구매</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFour;
