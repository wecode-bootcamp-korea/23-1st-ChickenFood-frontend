import React from 'react';
import './OrderItems.scss';

class OrderItems extends React.Component {
<<<<<<< HEAD
  render() {
    const {
      id,
      itemNum,
      plusBtn,
      minusBtn,
      itemName,
      itemImg,
      total,
      deleteList,
    } = this.props;
    return (
      <div className="orderItems">
        <div className="orderItemsLeft">
          <img className="itemImg" src={itemImg} alt="item" />
=======
  constructor() {
    super();

    this.state = {
      totalPrice: '',
      cart: [],
    };
  }
  // getCheckboxValue = e => {
  //   const { cart } = this.state;
  //   let totalCart = cart.push(this.props.total);
  //   console.log('setstate전:', cart);
  //   this.setState({
  //     cart: totalCart,
  //   });
  //   console.log('setstate 후:', cart);
  //   if (e.target.checked) {
  //     this.props.test(cart);
  //   }
  //   if (!e.target.checked) {
  //     this.props.test(0);
  //   }
  // };

  testProp = e => {
    if (e.target.checked) {
      this.props.test(this.props.total);
    }
    if (!e.target.checked) {
      this.props.test(0);
    }
  };
  render() {
    const { id, itemNum, plusBtn, minusBtn, itemName, itemImg, total } =
      this.props;
    const { getCheckboxValue, testProp } = this;
    return (
      <div className="orderItems">
        <div className="orderItemsLeft">
          <div className="checkBox">
            <input
              type="checkbox"
              className="checkHide"
              onClick={testProp}
              value={total}
            ></input>
          </div>
          <img className="itemImg" src={itemImg} alt="item"></img>
>>>>>>> master
          <div className="itemText">
            <div className="itemName">{itemName}</div>
            <div className="itemOption">
              수량:{' '}
<<<<<<< HEAD
              <button
                className="quantityBtn"
                name={id}
                onClick={itemNum === 1 ? null : minusBtn}
              >
                -
              </button>{' '}
              {itemNum}개
              <button className="quantityBtn" name={id} onClick={plusBtn}>
=======
              <button name={id} onClick={minusBtn}>
                -
              </button>{' '}
              {itemNum}개
              <button name={id} onClick={plusBtn}>
>>>>>>> master
                +
              </button>
            </div>
          </div>
        </div>
        <div className="orderItemsRight">
<<<<<<< HEAD
          <button className="closeBtn" onClick={() => deleteList(id)}></button>
=======
          <button className="closeBtn"></button>
>>>>>>> master
          <div className="itemPrice">\{total}</div>
        </div>
      </div>
    );
  }
}

export default OrderItems;
