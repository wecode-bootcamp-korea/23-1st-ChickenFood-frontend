import React from 'react';
import OrderItems from './OrderItems/OrderItems';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      totalPrice: 0,
      isChecked: false,
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

  // totalSum = e => {
  //   const { totalPrice } = this.state;
  //   const value = Number(e.target.value);
  //   let tp;
  //   console.log(e.target.checked);
  //   if (e.target.checked) {
  //     tp = totalPrice + value;
  //   } else {
  //     tp = totalPrice - value;
  //   }
  //   this.setState({
  //     totalPrice: tp,
  //   });
  // };

  totalSum = e => {
    const { totalPrice, isChecked } = this.state;
    const value = Number(e.target.value);
    let tp;
    console.log(e.target.name);
    if (e.target.checked) {
      tp = totalPrice + value;
    } else {
      tp = totalPrice - value;
    }
    this.setState({
      totalPrice: tp,
      isChecked: !isChecked,
    });
  };

  plusBtn = e => {
    const { items, isChecked } = this.state;
    const changeList = [...items];
    let sumPrice;
    console.log(e.target.name);
    if (isChecked) {
      changeList.map(el => {
        if (Number(e.target.name) === el.id) {
          el.quantity = el.quantity + 1;
          sumPrice = el.price * el.quantity;
          console.log(sumPrice);
        }
      });
      this.setState({
        items: changeList,
        totalPrice: sumPrice,
      });
      console.log(e.target);
    } else {
      changeList.map(el => {
        if (Number(e.target.name) === el.id) {
          el.quantity = el.quantity + 1;
        }
      });
      this.setState({
        items: changeList,
      });
    }
  };

  minusBtn = e => {
    const { items, isChecked } = this.state;
    const changeList = [...items];
    let sumPrice;
    if (isChecked) {
      changeList.map(el => {
        if (Number(e.target.name) === el.id) {
          el.quantity = el.quantity - 1;
          sumPrice = el.price * el.quantity;
          if (el.quantity < 1) {
            el.quantity = 1;
            sumPrice = el.price * el.quantity;
          }
        }
      });
      console.log(sumPrice);
      this.setState({
        items: changeList,
        totalPrice: sumPrice,
      });
    } else {
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
    }
  };

  allCheck = e => {
    const { items, isChecked } = this.state;
    const changeList = [...items];
    if (e.target.name === 'all') {
      changeList.map(el => {});
    }
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  deleteList = id => {
    const { items } = this.state;
    const filteredList = items.filter(product => product.id !== id);
    this.setState({
      items: filteredList,
    });
  };

  goToBest = () => {
    this.props.history.push('/best');
  };
  render() {
    const { items, totalPrice } = this.state;
    const { plusBtn, minusBtn, totalSum, check, deleteList, goToBest } = this;
    let shippingFee = 2500;
    if (totalPrice > 20000 || totalPrice === 0) {
      shippingFee = 0;
    }
    return (
      <div className="cartContainer">
        <div className="cartLayout">
          <div className="smallTitle">HOME > 장바구니</div>
          <div className="cartTitle">장바구니</div>
          {items.length === 0 && (
            <div className="emptyCart">
              <div className="emptyCartTitle">
                장바구니에 담긴 상품이 없습니다.
              </div>
              <div className="emptyCartBody">
                다양한 상품을 확인하고 장바구니에 담아보세요!
                <br />
                장바구니에 담긴 상품은 <span>최대 30일간</span> 보관됩니다.
              </div>
              <button className="goToBest" onClick={goToBest}>
                쇼핑 계속하기
              </button>
            </div>
          )}
          {items.length > 0 && (
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
                          name="all"
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
                      totalSum={totalSum}
                      deleteList={deleteList}
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
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
