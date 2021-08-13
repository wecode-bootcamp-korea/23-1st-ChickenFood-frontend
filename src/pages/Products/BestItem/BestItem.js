import React from 'react';
import './BestItem.scss';
import OneProduct from '../OneProduct/OneProduct';

class BestItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bestItem: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    fetch('http://10.58.2.134:8000/products?filter=best')
      .then(response => response.json())
      .then(data => {
        let bestItems = [];
        for (let i = 0; i < 4; i++) {
          bestItems[i] = data.items[i];
        }
        this.setState({
          bestItem: bestItems,
        });
      });
  };
  render() {
    const { bestItem } = this.state;
    return (
      <div className="topContents">
        <div className="productsRecommend">
          <h1 className="bestItem">베스트 아이템</h1>
          {/* <div className="imageSliderContainer">
            <ImageSlider />
          </div> */}
          <div className="bestItemContainer">
            {bestItem.map(bestItem => {
              return <OneProduct key={bestItem._id} products={bestItem} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default BestItem;
