import React from 'react';
import './Wishlist.scss';

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wishlistWraper">
        <h1 className="wishlistTitle">위시리스트</h1>
        <div className="wishlistContainer">
          <img
            className="nowishimg"
            src="./images/icon_nowish.png"
            alt="nowish"
          />
          <div className="nowishText">
            <p className="emptyContent title">
              위시리스트에 담긴 상품이 없습니다.
            </p>
            <p className="emptyContent">마음에 드는 상품은 하트를</p>
            <p className="emptyContent">
              꾹~ 눌러 위시리스트에 보관할 수 있습니다:)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Wishlist;
