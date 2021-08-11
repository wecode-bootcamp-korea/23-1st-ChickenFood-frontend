import React from 'react';
import './OrderItems.scss';

class OrderItems extends React.Component {
  render() {
    const {
      id,
      itemNum,
      plusBtn,
      minusBtn,
      itemName,
      itemImg,
      total,
      totalSum,
      deleteList,
    } = this.props;
    return (
      <div className="orderItems">
        <div className="orderItemsLeft">
          <div className="checkBox">
            <input
              type="checkbox"
              className="checkHide"
              name={id}
              onClick={totalSum}
              value={total}
            ></input>
          </div>
          <img className="itemImg" src={itemImg} alt="item"></img>
          <div className="itemText">
            <div className="itemName">{itemName}</div>
            <div className="itemOption">
              수량:{' '}
              <button name={id} onClick={minusBtn}>
                -
              </button>{' '}
              {itemNum}개
              <button name={id} onClick={plusBtn}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="orderItemsRight">
          <button className="closeBtn" onClick={() => deleteList(id)}></button>
          <div className="itemPrice">\{total}</div>
        </div>
      </div>
    );
  }
}

export default OrderItems;
