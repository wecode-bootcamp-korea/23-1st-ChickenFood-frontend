import React from 'react';
import './Productdetails.scss';

// 금액 합계 로직 대애충
// 1. 빈 배열 생성
// 2. 셀렉트박스에서 옵션 선택(클릭)할 때
// 3. data.price의 금액을 빈 배열로 가져오삼
// 4. 그리고나서 합계 란에 그 배열 값 띄우기
// 4. 다른 옵션 선택 할 때마다 data.price금액이 계속 더해짐
// 배열? number니까 스트링은 안되고.. 배열에 넣는게 맞나?

class Productdetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      emptyList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/mockData_detail_page.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.items });
      });
  }

  test = e => {
    console.log(123);
    console.log(e.target.value);
    this.setState({ emptyList: this.state.emptyList.concat(e.target.value) });
  };

  render() {
    // console.log('스테이트 데이터', this.state.data.name);
    console.log(this.state.emptyList);
    const data = this.state.data;
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
              <div className="productPrice">
                ₩{Math.floor(data.price).toLocaleString('ko-KR')}
              </div>
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
              <div>
                <div className="optionWrapper">
                  <select className="selectBox" onChange={this.test}>
                    <option value="옵션선택">옵션을 선택해주세요</option>
                    <option value="옵션1">{data.type_name}</option>
                    <option value="옵션2">{data.type_name}</option>
                    <option value="옵션3">{data.type_name}</option>
                    <option value="옵션4">{data.type_name}</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="productQuantity"> </div>
              </div>
            </div>
            <div></div>
            {/* 섹션4 */}
            <div className="sectionFour">
              <div className="selectedProduct">
                <div className="selectedProductName">
                  <span className="contentsTitle">석류향</span>
                  <img
                    className="plusAndMinus close"
                    src="./images/close-cross-symbol-in-a-circle.png"
                  />
                </div>

                <div className="plusAndMinusWrapper">
                  <span className="plusAndMinus">
                    <img className="plusAndMinus" src="./images/minus.png" />
                    <span className="quantity">1</span>
                    <img className="plusAndMinus" src="./images/plus.png" />
                  </span>

                  <span>
                    <span className="plusAndMinusPrice">
                      ₩{Math.floor(data.price).toLocaleString('ko-KR')}
                    </span>
                  </span>
                </div>
              </div>
              <div className="productTotal">
                <span className="quantityWrapper">
                  <span className="contentsTitle">합계</span>
                  <span>수량</span>
                  <span>0</span>
                </span>
                <span className="totalAmount">₩0</span>
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
