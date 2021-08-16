import React from 'react';
import { withRouter } from 'react-router-dom';
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
    this.getProductList();
  }

  getProductList = () => {
    fetch('http://10.58.2.134:8000/brands')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          circle: res.catalog,
        });
      });
  };

  isBtnClick = e => {
    let btnKey = e.currentTarget.dataset.name;
    this.setState({
      productNum: btnKey,
    });
  };

  goToBest = () => {
    this.props.history.push('/products');
  };

  render() {
    const { circle, productNum } = this.state;
    const { isBtnClick, goToBest } = this;
    return (
      <div className="bestContainer">
        <div className="bestTitle">
          <div className="bestTitleLink" onClick={goToBest}>
            이번주 <span>베스트</span>
          </div>
        </div>
        <div className="bestProducts">
          <ul className="catalogs">
            {circle.map(el => (
              <li key={el.id}>
                <button onClick={isBtnClick} data-name={el.id}>
                  <img className="circle" src={el.image} alt="circle" />
                  <p>{el.name}</p>
                </button>
              </li>
            ))}
          </ul>
          <BestProductCarousel id={productNum ? productNum : 17} />
        </div>
      </div>
    );
  }
}

export default withRouter(BestItem);
