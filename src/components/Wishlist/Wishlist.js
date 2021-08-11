import React from 'react';
import WishProduct from './WishProduct/WishProduct';
import './Wishlist.scss';
import { LIKES_MYPAGE, LIKES_DELETE_MYPAGE } from '../../config.js';

class Wishlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmptyWishlist: false,
      wishItem: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('http://10.58.2.249:8000/likes', {
      method: 'GET',
      headers: {
        Authorization:
          // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.HoiaDvN9zT9u7eQ7szsnORfIMqs6oByJ5eoXjFoztqc',
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.dER8tPLi9IvzpsZ_4uxCeTDRHbzBNhSA8dDAVppBayw',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log('서버데이터', data);
        this.setState({
          wishItem: data.ITEMS,
        });
      });
  }

  handleDelete = id => {
    // fetch(`http://10.58.5.122:8000/likes/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     Authorization:
    //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.HoiaDvN9zT9u7eQ7szsnORfIMqs6oByJ5eoXjFoztqc',
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     this.getData();
    //   });
    // console.log('아이템 삭제!!!', id);
  };

  handleCart = id => {
    fetch('http://10.58.2.249:8000/inventorys', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.dER8tPLi9IvzpsZ_4uxCeTDRHbzBNhSA8dDAVppBayw',
      },
      body: JSON.stringify({
        product_id: id,
        quantity: 1,
      }),
    });
  };

  render() {
    const { isEmptyWishlist, wishItem } = this.state;
    let emptyWishlist = isEmptyWishlist;
    if (wishItem.length === 0) {
      emptyWishlist = true;
    } else {
      emptyWishlist = false;
    }
    return (
      <div className="wishlistWraper">
        <h1 className="wishlistTitle">위시리스트</h1>
        {emptyWishlist === true ? (
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
        ) : (
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
                    id={item.id}
                    deleteButton={this.handleDelete}
                    pushCart={this.handleCart}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Wishlist;
