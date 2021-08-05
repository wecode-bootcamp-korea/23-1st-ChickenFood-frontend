import React from 'react';
import './Productdetails.scss';

class Productdetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/mockData_detail_page.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.result });
      });
  }

  render() {
    const { data } = this.state;
    // const data = this.state.data;
    console.log(this.state.data);
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
                {data.name}
                <div className="iconsWrapper">
                  <img className="heart" alt="heart" src="./images/heart.png" />
                  <img className="share" alt="share" src="./images/share.png" />
                </div>
              </div>
              <div className="productPrice">₩{data.price}</div>
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
                <span className="star">★★★★★</span>
                <span className="reviewUnit">(7건)</span>
              </div>
            </div>
            {/* 섹션3 */}
            <div className="sectionThree">
              <div className="sectionFour">
                <div className="selectedProduct">
                  <div>
                    <div className="contentsTitle title">{data.name}</div>
                    <div></div>
                  </div>
                  <div>
                    <div className="productQuantity">
                      <span className="plusAndMinusWrapper">
                        <img
                          className="plusAndMinus"
                          src="./images/Minus-sign-in-a-circle.svg.png"
                        />
                        <span className="quantity">1</span>
                        <img
                          className="plusAndMinus"
                          src="./images/plus_in_circle.png"
                        />
                      </span>
                      <span className="plusAndMinusPrice">{data.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 섹션4 */}
            <div className="sectionFour">
              <div className="productTotal">
                <span className="quantityWrapper">
                  <span className="contentsTitle">합계</span>
                  <span>수량</span>
                  <span> 2</span>
                </span>
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
