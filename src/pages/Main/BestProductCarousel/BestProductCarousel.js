import React from 'react';
import BestProduct from '../BestProduct/BestProduct';
import './BestProductCarousel.scss';

class BestProductCarousel extends React.Component {
  constructor() {
    super();

    this.state = {
      bestProduct: [],
    };
  }

  componentDidMount() {
    fetch('/data/bestProduct.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          bestProduct: res,
        });
      });
  }

  render() {
    const { bestProduct } = this.state;
    let transNum = 0;
    return (
      <>
        <div className="productCarousel">
          <span
            className="left"
            // style={{ backgroundImage: 'url(/images/left.png)' }}
          />
          <ul
            className="productWrap"
            style={{ transform: `translate(${transNum}px)` }}
          >
            {bestProduct.map(el => (
              <BestProduct
                key={el.id}
                product={el.name}
                price={el.price}
                imgsrc={el.thumbnail}
              />
            ))}
          </ul>
          <span
            className="right"
            // style={{ backgroundImage: 'url(/images/right.png)' }}
          />
        </div>
      </>
    );
  }
}

export default BestProductCarousel;
