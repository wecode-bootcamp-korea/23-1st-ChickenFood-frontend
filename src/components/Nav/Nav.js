import React from 'react';
import imgData_list from './imgData';
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

  // Mock데이터로 추후 변경 예정
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
