import React from 'react';
import OrderItems from './OrderItems/OrderItems';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    fetch('/data/item.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          items: res.items,
        });
      });
  }

  plusBtn = e => {
    const { items } = this.state;
    const changeList = [...items];
    changeList.map(el => {
      if (Number(e.target.name) === el.id) {
        el.quantity = el.quantity + 1;
      }
    });
    this.setState({
      items: changeList,
    });
  };

  minusBtn = e => {
    const { items } = this.state;
    const changeList = [...items];
    changeList.map(el => {
      if (Number(e.target.name) === el.id) {
        el.quantity = el.quantity - 1;
        if (el.quantity < 1) {
          el.quantity = 1;
        }
      }
    });
    this.setState({
      items: changeList,
    });
  };

  test = data => {
    let result = '';
    result = data;
    console.log('totalPrice=', result);
    this.setState({
      totalPrice: result,
    });
  };

  render() {
    const { items, totalPrice } = this.state;
    const { plusBtn, minusBtn } = this;
    let shippingFee = 2500;
    if (totalPrice > 20000 || totalPrice === 0) {
      shippingFee = 0;
    }
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
                        // onClick={this.test}
                      ></input>
                    </div>
                    <div>전체 선택</div>
                  </div>
                  <div className="orderTopRight">선택 삭제</div>
                </div>
                {items.map(el => (
                  <OrderItems
                    id={el.id}
                    itemName={el.name}
                    itemImg={el.thumbnail}
                    itemPrice={el.price}
                    itemNum={el.quantity}
                    plusBtn={plusBtn}
                    minusBtn={minusBtn}
                    total={el.price * el.quantity}
                    test={this.test}
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
                    <div className="priceNum">\{totalPrice}</div>
                  </div>
                  <div className="price shipping">
                    <div>
                      배송비 <span>(20,000원 이상 결제시 무료배송)</span>
                    </div>
                    <div className="priceNum">(+) \{shippingFee}</div>
                  </div>
                  <div className="price discount">
                    <div>할인 금액</div>
                    <div className="priceNum">(-) \0</div>
                  </div>
                </div>
                <div className="price total">
                  <div>결제 예정 금액</div>
                  <div className="priceNum">
                    \{Number(totalPrice) + shippingFee}
                  </div>
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
