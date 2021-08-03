import React from 'react';
import Banner from './Banner';
import BestItem from './BestItem';
import './main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <Banner />
        <BestItem />
      </div>
    );
  }
}

export default Main;
