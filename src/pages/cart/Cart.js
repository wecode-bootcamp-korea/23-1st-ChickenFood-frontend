import React from 'react';
import OrderItems from './OrderItems/OrderItems';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch('/data/item.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          items: res.item,
        });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="cartContainer">
        <div className="cartLayout">
          <div className="smallTitle">HOME > 장바구니</div>
          <div className="cartTitle">장바구니</div>
          <div className="cartBody">
            <div className="leftContainer">
              <span className="leftTitle">일반 상품</span>
              <div className="orderBox">
                <div className="orderTop">
                  <div className="orderTopLeft">
                    <div className="checkBox">
                      <input
                        type="checkbox"
                        className="checkHide"
                        checked="checked"
                      ></input>
                    </div>
                    <div>전체 선택</div>
                  </div>
                  <div className="orderTopRight">선택 삭제</div>
                </div>
                {items.map(el => (
                  <OrderItems
                    key={el.id}
                    itemName={el.itemName}
                    itemImg={el.itemImg}
                    itemPrice={el.itemPrice}
                  />
                ))}
              </div>
            </div>
            <div className="rightContainer">
              <div className="billBox">
                <div className="billTitle">결제 예정 내역</div>
                <div className="billContents">
                  <div className="billContentsTitle">일반 상품</div>
                  <div className="price item">
                    <div>총 상품 금액</div>
                    <div className="priceNum">\0</div>
                  </div>
                  <div className="price shipping">
                    <div>
                      배송비 <span>(20,000원 이상 결제시 무료배송)</span>
                    </div>
                    <div className="priceNum">(+) \0</div>
                  </div>
                  <div className="price discount">
                    <div>할인 금액</div>
                    <div className="priceNum">(-) \0</div>
                  </div>
                </div>
                <div className="price total">
                  <div>결제 예정 금액</div>
                  <div className="priceNum">\0</div>
                </div>
              </div>
              <div className="buyBtnBox">
                <button className="buyBtn">구매하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
