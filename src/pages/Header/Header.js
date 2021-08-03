import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="layoutHeader">
        <div className="headerFlexBox">
          <div className="authFlexBox">
            <ul className="layoutAuth">
              <li>
                <a href="#">로그인</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#">마이페이지</a>
              </li>
              <li>
                <a href="#">멤버십</a>
              </li>
              <li>
                <a href="#">고객센터</a>
              </li>
            </ul>
          </div>
          <nav className="navFlexBox">
            {/* <img className="logoImage"></img> span이랑 교체 예정*/}
            <span>logoImage</span>
            {/* <img className="sloganImage"></img> span이랑 교체 예정*/}
            <span>sloganImage</span>
            <ul className="layoutNav">
              <li>
                <a href="#">상품</a>
              </li>
              <li>
                <a href="#">이벤트</a>
              </li>
              <li>
                <a href="#">리뷰</a>
              </li>
              <li>
                <a href="#">커뮤니티</a>
              </li>
              <li>
                <a href="#">어바웃 스킨푸드</a>
              </li>
            </ul>
            <ul className="navIconWrap">
              <li>
                <a href="#">adIcon</a>
              </li>
              <li>
                <a href="#">searchIcon</a>
              </li>
              <li>
                <a href="#">shoppingListIcon</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
