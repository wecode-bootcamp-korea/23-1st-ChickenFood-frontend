import React from 'react';
import WishProduct from './WishProduct/WishProduct';
import './Wishlist.scss';
import { LIKES_MYPAGE } from '../../config.js';

class Wishlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleWishlist: true,
      wishItem: [1, 2, 3, 4, 5, 6, 7],
    };
  }

  componentDidMount() {
    // console.log('api 주소', LIKES_MYPAGE);
    fetch(LIKES_MYPAGE, {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.HoiaDvN9zT9u7eQ7szsnORfIMqs6oByJ5eoXjFoztqc',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          wishItem: data.ITEMS,
        });
      });
  }
  render() {
    const { visibleWishlist, wishItem } = this.state;
    console.log('위시리스트', wishItem);
    return (
      <div className="wishlistWraper">
        <h1 className="wishlistTitle">위시리스트</h1>
        {visibleWishlist && (
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
        )}
        <div className="cardContainer">
          <div className="cardList">
            <div className="cardtop"></div>
            {wishItem.map((item, index) => {
              return (
                <WishProduct
                  key={index}
                  name={item.name}
                  price={item.price}
                  image={item.thumbnail}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Wishlist;
