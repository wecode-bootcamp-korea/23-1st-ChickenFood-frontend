import React from 'react';
import navAuthData_list from './navAuthData';
import subCategory_list from './subCategoryData';
import subCategoryNav_list from './subCategoryNavData';
import ListComponent from './ListComponent';
import SubLiComponent from './SubLiComponent';
import './nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      subCategoryMode: 'layoutSubCategoryDefault',
      // navAuthData: '',
    };
  }

  // componentDidMount = () => {
  //   fetch('http://localhost:3000/data/navAuthData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         navAuthData: res,
  //       });
  //     });
  // }

  modeDefault = () => {
    this.setState({ subCategoryMode: 'layoutSubCategoryDefault' });
  };

  modeActive = () => {
    this.setState({ subCategoryMode: 'layoutSubCategoryActive' });
  };

  render() {
    // const { navAuthData } = this.state;
    return (
      <header className="layoutHeader">
        <div className="headerFlexBox" onMouseEnter={this.modeDefault}>
          <ul className="authFlexBox">
            {navAuthData_list.map(el => {
              return (
                <ListComponent key={el.id} data={el.name} path={el.path} />
              );
            })}
          </ul>
        </div>
        <nav className="navFlexBox" onMouseEnter={this.modeActive}>
          <div className="imgBox">
            <a href="#">
              <img className="logoImage" src="images/chickenfood_logo.png" />
            </a>
          </div>
          <ul className="layoutNav">
            {subCategoryNav_list.map(el => {
              return (
                <ListComponent key={el.id} data={el.name} path={el.path} />
              );
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
        <div className={this.state.subCategoryMode}>
          <nav className="sub Category" onMouseLeave={this.modeDefault}>
            <div className="sub imgBox">
              <img src="images/test_welcome.png" />
            </div>
            <div className="sub listBox">
              {subCategory_list.map((el, index) => {
                return <SubLiComponent key={index} category={el} />;
              })}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
