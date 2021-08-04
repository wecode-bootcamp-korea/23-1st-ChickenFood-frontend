import React from 'react';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';

class BestItem extends React.Component {
  render() {
    return (
      <div className="topContents">
        <div className="productsRecommend">
          <h1 className="bestItem">
            베스트 <span className="itemText">아이템</span>
          </h1>
          <div className="imageSliderContainer">
            <ImageSlider />
          </div>
        </div>
      </div>
    );
  }
}

export default BestItem;
