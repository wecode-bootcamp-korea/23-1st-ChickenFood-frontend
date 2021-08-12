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
    fetch('http://10.58.2.249:8000/inventorys', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.dER8tPLi9IvzpsZ_4uxCeTDRHbzBNhSA8dDAVppBayw',
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          items: res.items,
        });
      });
  }

  plusBtn = (itemNum, id) => {
    console.log('상품수확인', itemNum, '아이디확인', id);

    fetch(`http://10.58.2.249:8000/inventorys?id=${id}`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.dER8tPLi9IvzpsZ_4uxCeTDRHbzBNhSA8dDAVppBayw',
      },
      body: JSON.stringify({
        quantity: itemNum + 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    const { items } = this.state;

    const changeList = items.map(item => {
      if (Number(id) === item.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    console.log('quantity=', changeList[0].quantity);
    this.setState({
      items: changeList,
    });
  };

  minusBtn = (itemNum, id) => {
    console.log('상품수확인', itemNum, '아이디확인', id);

    fetch(`http://10.58.2.249:8000/inventorys?id=${id}`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.dER8tPLi9IvzpsZ_4uxCeTDRHbzBNhSA8dDAVppBayw',
      },
      body: JSON.stringify({
        quantity: itemNum - 1,
      }),
    });
    const { items } = this.state;
    const changeList = items.map(item => {
      if (Number(id) === item.id) {
        if (item.quantity < 2) {
          return { ...item, quantity: 1 };
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      } else {
        return item;
      }
    });
    this.setState({
      items: changeList,
    });
  };

  deleteList = id => {
    fetch(`http://10.58.2.249:8000/inventorys?id=${id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.dER8tPLi9IvzpsZ_4uxCeTDRHbzBNhSA8dDAVppBayw',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    const { items } = this.state;
    const filteredList = items.filter(product => product.id !== id);
    this.setState({
      items: filteredList,
    });
  };

  goToBest = () => {
    this.props.history.push('/bestitem');
  };

  buyItem = () => {
    fetch(`http://10.58.2.249:8000/inventorys`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.dER8tPLi9IvzpsZ_4uxCeTDRHbzBNhSA8dDAVppBayw',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    alert('구매가 완료되었습니다.');
    this.setState({
      items: [],
    });
  };

  getTotalPrice = items => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
    return total;
  };

  render() {
    const { items } = this.state;
    const { plusBtn, minusBtn, deleteList, goToBest, buyItem, getTotalPrice } =
      this;
    const shippingFee =
      getTotalPrice(items) > 20000 || getTotalPrice(items) === 0 ? 0 : 2500;
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
              <div className="orderContainer">
                <span className="orderBoxTitle">일반 상품</span>
                <div className="orderBox">
                  <div className="orderTop">
                    <div className="orderTopSelect">상품 목록</div>
                  </div>
                  {items.map(item => (
                    <OrderItems
                      key={item.id}
                      id={item.id}
                      itemName={item.name}
                      itemImg={item.thumbnail}
                      itemPrice={item.price}
                      itemNum={item.quantity}
                      total={item.price * item.quantity}
                      plusBtn={plusBtn}
                      minusBtn={minusBtn}
                      deleteList={deleteList}
                    />
                  ))}
                </div>
              </div>
              <div className="billContainer">
                <div className="billBox">
                  <div className="billTitle">결제 예정 내역</div>
                  <div className="billContents">
                    <div className="billContentsTitle">일반 상품</div>
                    <div className="price item">
                      <div>총 상품 금액</div>
                      <div className="priceNum">\{getTotalPrice(items)}</div>
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
                      \{getTotalPrice(items) + shippingFee}
                    </div>
                  </div>
                </div>
                <div className="buyBtnBox">
                  <button className="buyBtn" onClick={buyItem}>
                    구매하기
                  </button>
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
