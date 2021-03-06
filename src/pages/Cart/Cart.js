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
    fetch('http://10.58.2.134:8000/inventorys', {
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
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
    fetch(`http://10.58.2.134:8000/inventorys?id=${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        quantity: itemNum + 1,
      }),
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
    this.setState({
      items: changeList,
    });
  };

  minusBtn = (itemNum, id) => {
    fetch(`http://10.58.2.134:8000/inventorys?id=${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
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
    fetch(`http://10.58.2.134:8000/inventorys?id=${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
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
    fetch(`http://10.58.2.134:8000/inventorys`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    alert('????????? ?????????????????????.');
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
    console.log('??????', this.props.location);
    const { items } = this.state;
    const { plusBtn, minusBtn, deleteList, goToBest, buyItem, getTotalPrice } =
      this;
    const shippingFee =
      getTotalPrice(items) > 20000 || getTotalPrice(items) === 0 ? 0 : 2500;
    return (
      <div className="cartContainer">
        <div className="cartLayout">
          <div className="smallTitle">HOME > ????????????</div>
          <div className="cartTitle">????????????</div>
          {items.length === 0 && (
            <div className="emptyCart">
              <div className="emptyCartTitle">
                ??????????????? ?????? ????????? ????????????.
              </div>
              <div className="emptyCartBody">
                ????????? ????????? ???????????? ??????????????? ???????????????!
                <br />
                ??????????????? ?????? ????????? <span>?????? 30??????</span> ???????????????.
              </div>
              <button className="goToBest" onClick={goToBest}>
                ?????? ????????????
              </button>
            </div>
          )}
          {items.length > 0 && (
            <div className="cartBody">
              <div className="orderContainer">
                <span className="orderBoxTitle">?????? ??????</span>
                <div className="orderBox">
                  <div className="orderTop">
                    <div className="orderTopSelect">?????? ??????</div>
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
                  <div className="billTitle">?????? ?????? ??????</div>
                  <div className="billContents">
                    <div className="billContentsTitle">?????? ??????</div>
                    <div className="price item">
                      <div>??? ?????? ??????</div>
                      <div className="priceNum">
                        ???{getTotalPrice(items).toLocaleString()}
                      </div>
                    </div>
                    <div className="price shipping">
                      <div>
                        ????????? <span>(20,000??? ?????? ????????? ????????????)</span>
                      </div>
                      <div className="priceNum">
                        (+) ???{shippingFee.toLocaleString()}
                      </div>
                    </div>
                    <div className="price discount">
                      <div>?????? ??????</div>
                      <div className="priceNum">(-) 0</div>
                    </div>
                  </div>
                  <div className="price total">
                    <div>?????? ?????? ??????</div>
                    <div className="priceNum">
                      ???{(getTotalPrice(items) + shippingFee).toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="buyBtnBox">
                  <button className="buyBtn" onClick={buyItem}>
                    ????????????
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
