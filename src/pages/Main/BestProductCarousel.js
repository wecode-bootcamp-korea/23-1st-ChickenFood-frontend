import React from 'react';
import BestProduct from './BestProduct';

class BestProductCarousel extends React.Component {
  render() {
    return (
      <div className="productCarousel">
        <span
          className="left"
          style={{ backgroundImage: 'url(/images/left.png)' }}
        />
        <BestProduct />
        <BestProduct />
        <BestProduct />
        <BestProduct />
        <span
          className="right"
          style={{ backgroundImage: 'url(/images/right.png)' }}
        />
      </div>
    );
  }
}

export default BestProductCarousel;
