import React from 'react';
import './nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <header className="layoutHeader">
        <div className="headerFlexBox">
          <ul className="authFlexBox">
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
          <div className="imgBox">
            <img className="logoImage" src="images/chickenfood_logo.png" />
          </div>
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
              <a href="#">어바웃 치킨푸드</a>
            </li>
          </ul>
          <ul className="navIconWrap">
            <li>
              <a href="#">
                <img className="youtubeIcon" src="images/video-player.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="searchIcon" src="images/search.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="shoppingListIcon" src="images/cart.png" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="layoutSubCategoryActive">
          <nav className="sub Category">
            <div className="sub imgBox">
              <img src="images/test_welcome.png" />
            </div>
            <div className="sub listBox">
              <ul className="sub productList">
                <li>베스트</li>
                <li>브랜드</li>
                <li>유형별</li>
              </ul>
              <ul className="sub event">
                <li>진행중</li>
                <li>종료</li>
              </ul>
              <ul className="sub review">
                <li>리뷰</li>
              </ul>
              <ul className="sub community">
                <li>공지사항</li>
                <li>매장안내</li>
                <li>FAQ</li>
              </ul>
              <ul className="sub aboutCompany">
                <li>프로젝트 기간</li>
                <li>프로젝트 구성원</li>
                <li>프로젝트 목표</li>
                <li>구현 기능</li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
