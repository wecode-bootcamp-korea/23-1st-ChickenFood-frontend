import React from 'react';
import { withRouter } from 'react-router-dom';
import imgData_list from './imgData';
import navAuthData_list from './navAuthData';
import subCategory_list from './subCategoryData';
import subCategoryNav_list from './subCategoryNavData';
import ListComponent from './ListComponent';
import SubLiComponent from './SubLiComponent';
import '../../../src/config.js';
import './nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      loginMode: '',
      subCategoryMode: 'layoutSubCategoryDefault',
      // navAuthData: '',
    };
  }

  modeDefault = () => {
    this.setState({ subCategoryMode: 'layoutSubCategoryDefault' });
  };

  modeActive = () => {
    this.setState({ subCategoryMode: 'layoutSubCategoryActive' });
  };

  goCart = () => {
    this.props.history.push('/cart');
  };

  handlePath = path => {
    this.props.history.push(path);
    console.log('selected path', path);
  };

  render() {
    const TOKEN = localStorage.getItem('TOKEN');
    return (
      <header className="layoutHeader">
        <div className="headerFlexBox" onMouseEnter={this.modeDefault}>
          <ul className="authFlexBox">
            {TOKEN
              ? navAuthData_list.isLogin.map(el => {
                  return (
                    <ListComponent
                      key={el.id}
                      classname={el.classname}
                      data={el.name}
                      path={el.path}
                    />
                  );
                })
              : navAuthData_list.isNotLogin.map(el => {
                  return (
                    <ListComponent
                      key={el.id}
                      classname={el.classname}
                      data={el.name}
                      path={el.path}
                    />
                  );
                })}
          </ul>
        </div>
        <nav className="navFlexBox" onMouseEnter={this.modeActive}>
          <ul className="imgBox">
            {imgData_list.logoImage.map(el => {
              return (
                <ListComponent
                  key={el.id}
                  classname={el.classname}
                  path={el.path}
                  src={el.src}
                />
              );
            })}
          </ul>
          <ul className="layoutNav">
            {subCategoryNav_list.map(el => {
              return (
                <ListComponent key={el.id} data={el.name} path={el.path} />
              );
            })}
          </ul>
          <ul className="navIconWrap">
            {imgData_list.navIconImage.map(el => {
              return (
                <ListComponent
                  key={el.id}
                  classname={el.classname}
                  path={el.path}
                  src={el.src}
                />
              );
            })}
            <li>
              <div className="pageMove" onClick={this.goCart}>
                <img
                  className="shoppingListIcon"
                  src="images/cart.png"
                  alt="cart"
                />
              </div>
            </li>
          </ul>
        </nav>
        <div className="subCatgoryContainer">
          <div className={this.state.subCategoryMode}>
            <nav className="sub Category" onMouseLeave={this.modeDefault}>
              <div className="sub imgBox">
                <img src="images/main_banner.jpg" alt="" />
              </div>
              <div className="sub listBox">
                <ul className="productList">
                  <ListComponent
                    data="베스트"
                    name="/products"
                    id="1"
                    handlePath={this.handlePath}
                  />
                  <ListComponent
                    data="브랜드"
                    name="/products/brand/1"
                    id="2"
                    handlePath={this.handlePath}
                  />
                  <ListComponent
                    data="유형별"
                    name="/products/type/1"
                    id="3"
                    handlePath={this.handlePath}
                  />
                </ul>
                {subCategory_list.map((el, index) => {
                  return (
                    <SubLiComponent
                      key={index}
                      category={el}
                      handlePage={this.handlePage}
                    />
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Nav);
