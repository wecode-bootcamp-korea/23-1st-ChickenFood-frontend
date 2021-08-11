import React from 'react';
import Banner from './Banner/Banner';
import BestItem from './BestItem/BestItem';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="mainPage">
        <Banner />
        <BestItem />
      </div>
    );
  }
}

export default Main;
