import React from 'react';
import BestProductCarousel from './BestProductCarousel';
import ProductCircle from './ProductCircle';

class BestItem extends React.Component {
  constructor() {
    super();

    this.state = {
      circle: [],
    };
  }
  componentDidMount() {
    fetch('/data/productCircle.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          circle: res,
        });
      });
  }
  render() {
    return (
      <div className="bestContainer">
        <div className="bestTitle">
          <a href="">이번주 베스트</a>
        </div>
        <div className="bestProducts">
          <div className="productsListWrap">
            <ul>
              {this.state.circle.map((el, index) => (
                <ProductCircle
                  key={index + el.imgName}
                  name={el.imgName}
                  src={el.imgSrc}
                />
              ))}
            </ul>
          </div>
          <BestProductCarousel />
        </div>
      </div>
    );
  }
}

export default BestItem;
