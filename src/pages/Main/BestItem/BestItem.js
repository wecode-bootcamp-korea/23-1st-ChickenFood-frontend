import React from 'react';
import BestProductCarousel from '../BestProductCarousel/BestProductCarousel';
import './BestItem.scss';

class BestItem extends React.Component {
  constructor() {
    super();

    this.state = {
      circle: [],
    };
  }
  componentDidMount() {
    fetch('/data/productCircle.json')
      .then(res => res.json())
      .then(res => {
        console.log(res);
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
          <ul className="catalogs">
            {this.state.circle.map(el => (
              <li key={el.id}>
                <img className="circle" src={el.image} alt="circle" />
                <p>{el.name}</p>
              </li>
            ))}
          </ul>
          <BestProductCarousel />
        </div>
      </div>
    );
  }
}

export default BestItem;
