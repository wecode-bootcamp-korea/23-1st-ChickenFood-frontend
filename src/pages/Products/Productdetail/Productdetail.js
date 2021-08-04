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
              src="./images/sheabutter_cream.png"
            />
          </div>
        </section>
        {/* 오른쪽 */}
        <section className="productRight">
          <div className="sectionsWrapper">
            {/* 섹션1 */}
            <div className="sectionOne">
              <div className="productName">
                수비드 마스크 시트
                <div className="iconsWrapper">
                  <img className="heart" alt="heart" src="./images/heart.png" />
                  <img className="share" alt="share" src="./images/share.png" />
                </div>
              </div>
              <div className="productPrice">￦1,100</div>
            </div>
            {/* 섹션2 */}
            <div className="sectionTwo">
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
                  <span>#비건</span>
                  <span>#데일리템</span>
                  <span>#생기맑음</span>
                  <span>#촉촉</span>
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
                <span className="start">★★★★★ (3건)</span>
              </div>
            </div>
            {/* 섹션3 */}
            <div className="sectionThree">
              <div className="options"></div>
            </div>
            {/* 섹션4 */}
            <div className="sectionFour">
              <div className="selectedProduct">
                <div>
                  <span className="contentsTitle title">토마토</span>
                  <i class="fas fa-times-circle"></i>
                </div>
                <div>
                  <div className="productQuantity"> 이부분에 수량조절기능</div>
                </div>
              </div>
            </div>
            {/* 섹션5 */}
            <div className="sectionFive">
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
