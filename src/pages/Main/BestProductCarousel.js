import React from 'react';
import BestProduct from './BestProduct';

class BestProductCarousel extends React.Component {
  render() {
    return (
      <div className="productCarousel">
        <span
          className="left"
          style={{ backgroundImage: 'url(/images/left.jpg)' }}
        />
        <BestProduct />
        <BestProduct />
        <BestProduct />
        <BestProduct />
        <span
          className="right"
          style={{ backgroundImage: 'url(/images/right.jpg)' }}
        />
      </div>
    );
  }
}

export default BestProductCarousel;
