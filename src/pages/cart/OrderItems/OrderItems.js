import React from 'react';
import './OrderItems.scss';

class OrderItems extends React.Component {
  render() {
    const { itemName, itemImg, itemPrice } = this.props;
    return (
      <div className="orderItems">
        <div className="orderItemsLeft">
          <div className="checkBox">
            <input type="checkbox" className="checkHide"></input>
          </div>
          <img className="itemImg" src={itemImg} alt="item"></img>
          <div className="itemText">
            <div className="itemName">{itemName}</div>
            <div className="itemOption">수량: 1개</div>
          </div>
        </div>
        <div className="orderItemsRight">
          <button className="closeBtn"></button>
          <div className="itemPrice">{itemPrice}</div>
        </div>
      </div>
    );
  }
}

export default OrderItems;
