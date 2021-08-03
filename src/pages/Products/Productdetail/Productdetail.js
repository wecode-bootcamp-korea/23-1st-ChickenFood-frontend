import React from 'react';
import './Productdetails.scss';

class Productdetail extends React.Component {
  render() {
    return (
      <div className="productDetail">
        {/* 왼쪽 */}
        <section className="productLeft">
          <div className="imageWrapper">
            <img
              className="sampleImage"
              alt="product"
              src="./images/sample.jpeg"
            />
          </div>
        </section>
        {/* 오른쪽 */}
        <section className="productRight">
          <div className="sectionsWrapper">
            {/* 섹션1 */}
            <div className="sectionOne">
              <div className="productName">
                수비드 마스크 시트 3+3
                <i className="far fa-heart"></i>
                <i className="fas fa-share-alt"></i>
              </div>
              <div className="productPrice">￦1,100</div>
            </div>
            {/* 섹션2 */}
            <div className="sectionTwo">
              <div className="coupon">
                <span className="contentsTitle">쿠폰</span>
                <button className="couponBtn">
                  멤버십 상시 10% 할인(110할인)
                  <i class="fas fa-arrow-down"></i>
                </button>
              </div>
              <div className="tags">
                <span className="contentsTitle">관련태그</span>
                <span className="tagsWrapper">
                  <button>#비건</button>
                  <button>#데일리템</button>
                  <button>#생기맑음</button>
                </span>
              </div>
              <div className="shipping">
                <span className="contentsTitle">배송비</span>
                <span>2,750원(20,000원 이상 결제시 무료배송)</span>
              </div>
              <div className="review">
                <span className="contentsTitle">리뷰</span>
                <span>★★★★★ (3건)</span>
              </div>
            </div>
            {/* 섹션3 */}
            <div className="sectionThird">
              <div className="options"></div>
            </div>
            {/* 섹션4 */}
            <div className="sectionFourth">
              <div className="selectedProduct">
                <div>
                  <span className="contentsTitle">토마토</span>
                  <i class="fas fa-times-circle"></i>
                </div>
                <div>
                  <div className="productQuantity"> 이부분에 수량조절기능</div>
                </div>
              </div>
            </div>
            <div className="sectionFifth">
              <div className="productTotal">
                <span className="contentsTitle">합계</span>
                <span>수량 : 2</span>
                <span className="totalAmount">₩2,200</span>
              </div>
              <div className="BtnsWrapper">
                <button className="putInCart">장바구니 담기</button>
                <button className="olderNow">바로구매</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Productdetail;
