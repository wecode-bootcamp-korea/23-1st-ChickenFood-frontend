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
    fetch('http://10.58.2.134:8000/likes', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          wishItem: data.ITEMS,
        });
      });
  }

  handleDelete = id => {
    fetch(`http://10.58.2.134:8000/likes/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(data => {
        this.getData();
      });
  };

  handleCart = id => {
    fetch('http://10.58.2.134:8000/inventorys', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        product_id: id,
        quantity: 1,
      }),
    });
    this.handleDelete(id);
  };

  render() {
    const { wishItem } = this.state;
    // if (wishItem.length) {
    //   isEmptyWishlist = true;
    // } else {
    //   isEmptyWishlist = false;
    // }
    return (
      <div className="wishlistWraper">
        <h1 className="wishlistTitle">위시리스트</h1>
        {!wishItem.length ? (
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
