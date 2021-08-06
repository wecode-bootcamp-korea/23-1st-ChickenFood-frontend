import React from 'react';
import BestProductCarousel from '../BestProductCarousel/BestProductCarousel';
import './BestItem.scss';

class BestItem extends React.Component {
  constructor() {
    super();

    this.state = {
      circle: [],
      productNum: '',
    };
  }
  componentDidMount() {
    fetch('/data/productCircle.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          circle: res,
        });
      });
  }

  isBtnClick = e => {
    let btnKey = e.currentTarget.dataset.key;
    this.setState({
      productNum: btnKey,
    });
  };

  render() {
    const { circle, productNum } = this.state;
    const { isBtnClick } = this;
    return (
      <div className="bestContainer">
        <div className="bestTitle">
          <a href="">이번주 베스트</a>
        </div>
        <div className="bestProducts">
          <ul className="catalogs">
            {circle.map(el => (
              <li>
                <button onClick={isBtnClick} data-key={el.id}>
                  <img className="circle" src={el.image} alt="circle" />
                  <p>{el.name}</p>
                </button>
              </li>
            ))}
          </ul>
          <BestProductCarousel key={productNum} id={productNum} />
        </div>
      </div>
    );
  }
}

export default BestItem;
