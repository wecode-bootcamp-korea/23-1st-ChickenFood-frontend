import React from 'react';
import BestProduct from '../BestProduct/BestProduct';
import './BestProductCarousel.scss';

class BestProductCarousel extends React.Component {
  constructor() {
    super();

    this.state = {
      bestProduct: [],
      pageNum: 4,
    };
  }

  componentDidMount() {
    {
      this.getCarouselData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      {
        this.getCarouselData();
      }
    }
  }

  getCarouselData = () => {
    console.log('메인 블러오기');
    const { id } = this.props;
    fetch(`http://10.58.2.134:8000/products?filter=best&brand=${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          bestProduct: res.items,
        });
      });
  };

  nextBtn = () => {
    const { pageNum, bestProduct } = this.state;
    let index = pageNum;
    if (index >= bestProduct.length) {
      index = 0;
    }
    index = index + 4;
    this.setState({
      pageNum: index,
    });
  };

  prvBtn = () => {
    const { pageNum } = this.state;
    let index = pageNum;
    if (index === 4) {
      index = 12;
    }
    index = index - 4;
    this.setState({
      pageNum: index,
    });
  };

  render() {
    const { pageNum, bestProduct } = this.state;
    const { prvBtn, nextBtn } = this;
    let transNum = 0;

    if (pageNum > 4) {
      transNum = -1020;
    }
    return (
      <div className="productCarousel">
        <span className="left" onClick={prvBtn} />
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
        <span className="right" onClick={nextBtn} />
      </div>
    );
  }
}

export default BestProductCarousel;
