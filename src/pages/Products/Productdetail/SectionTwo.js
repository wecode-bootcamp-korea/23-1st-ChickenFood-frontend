import React, { Component } from 'react';
import './SectionTwo.scss';

export class SectionTwo extends Component {
  render() {
    return (
      <div>
        <div className="sectionTwo sections">
          <div className="coupon">
            <span className="contentsTitle">쿠폰</span>
            <button className="couponBtn">
              멤버십 상시 10% 할인(110할인)
              <img
                className="download"
                alt="download"
                src="./images/down-arrow.png"
              />
            </button>
          </div>
          <div className="tags">
            <span className="contentsTitle">관련태그</span>
            <span className="tagsWrapper">
              <span className="tagEach">#비건</span>
              <span className="tagEach">#데일리템</span>
              <span className="tagEach">#생기맑음</span>
              <span className="tagEach">#촉촉</span>
            </span>
          </div>
          <div className="shipping">
            <span className="contentsTitle">배송비</span>
            <span className="shippingFee">
              2,750원(20,000원 이상 결제시 무료배송)
            </span>
          </div>
          <div className="review">
            <span className="contentsTitle">리뷰</span>
            <span className="starWrapper">
              <img className="star" src="./images/star.png" />
              <img className="star" src="./images/star.png" />
              <img className="star" src="./images/star.png" />
              <img className="star" src="./images/star.png" />
              <img className="star" src="./images/star.png" />
            </span>
            <span className="reviewUnit">(7건)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTwo;
