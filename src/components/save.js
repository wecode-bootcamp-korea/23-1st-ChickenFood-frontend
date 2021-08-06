import React from 'react';
import navData_list from './NavData';
import ListComponent from './ListComponent';
import './nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { navData } = this.state;
    return (
      <header className="layoutHeader">
        <div className="headerFlexBox">
          <ul className="authFlexBox">
            {navData_list.auth.map(el => {
              return <ListComponent data={el} />;
            })}
          </ul>
        </div>
        <nav className="navFlexBox">
          <div className="imgBox">
            <img className="logoImage" src="images/chickenfood_logo.png" />
          </div>
          <ul className="layoutNav">
            {navData_list.nav.map(el => {
              return <ListComponent data={el} />;
            })}
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
                {navData_list.subCategory.productList.map(el => {
                  return <ListComponent data={el} />;
                })}
              </ul>
              <ul className="sub event">
                {navData_list.subCategory.event.map(el => {
                  return <ListComponent data={el} />;
                })}
              </ul>
              <ul className="sub review">
                {navData_list.subCategory.review.map(el => {
                  return <ListComponent data={el} />;
                })}
              </ul>
              <ul className="sub community">
                {navData_list.subCategory.community.map(el => {
                  return <ListComponent data={el} />;
                })}
              </ul>
              <ul className="sub aboutCompany">
                {navData_list.subCategory.aboutCompany.map(el => {
                  return <ListComponent data={el} />;
                })}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
