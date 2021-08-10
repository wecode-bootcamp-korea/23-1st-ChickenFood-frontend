import React from 'react';
import './Productdetails.scss';

// 금액 합계 로직 대애충
// 1. 빈 배열 생성
// 2. 셀렉트박스에서 옵션 선택(클릭)할 때
// 3. data.price의 금액을 빈 배열로 가져오삼
// 4. 그리고나서 합계 란에 그 배열 값 띄우기
// 4. 다른 옵션 선택 할 때마다 data.price금액이 계속 더해짐
// 배열? number니까 스트링은 안되고.. 배열에 넣는게 맞나?

// 상품 수량 조절
// 1. 상품 수량조절기 (+)를 클릭하면
// 2. 수량 숫자에 1씩 더해짐
// 3. 그리고 맨 아래 total값에도 data.price값이 더해짐
// 4. (-)버튼 누르면 총 합계에서 data.price값이 빠짐

// 수량 숫자가 1일때는 (-)버튼 비활성화
// close아이콘 클릭시 영역 한 줄 제거

class Productdetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      emptyList: [],
      type: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/mockData_detail_page.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.items });
      });

    // http://10.58.7.206:8000/options

    fetch('data/mockData_detail_page_second.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ type: res.option });
      });
  }

  select = e => {
    this.setState({
      emptyList: this.state.emptyList.concat({
        type: e.target.value,
        quantity: 1,
      }),
      totalPrice: this.state.totalPrice + this.state.data.price,
    });
  };

  render() {
    // console.log('스테이트 데이터', this.state.data.name);
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
            <div className="sectionOne sections">
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
            {/* 섹션3 */}
            {/* 셀렉트박스 */}
            <div className="sectionThree sections">
              <div>
                <div className="optionWrapper">
                  <select className="selectBox" onChange={this.select}>
                    <option value="옵션선택">옵션을 선택해주세요</option>
                    {this.state.type.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                    {/* <option value={data.type_name}>{data.type_name}</option>
                    <option value={data.type_name}>{data.type_name}</option>
                    <option value={data.type_name}>{data.type_name}</option>
                    <option value={data.type_name}>{data.type_name}</option> */}
                  </select>
                </div>
              </div>
              <div>
                <div className="productQuantity"> </div>
              </div>
            </div>
            <div></div>
            {/* 섹션4 */}
            {/* 수량조절/합계금액 영역 */}
            <div className="sectionFour section">
              {this.state.emptyList.map((item, index) => {
                return (
                  <div className="selectedProduct" key={index}>
                    <div className="selectedProductName">
                      <span className="contentsTitle">{item.type}</span>
                      <img
                        className="close"
                        src="./images/close-cross-symbol-in-a-circle.png"
                        alt="close"
                      />
                    </div>

                    <div className="plusAndMinusWrapper">
                      <span className="plusAndMinuss">
                        <img
                          className="plusAndMinus"
                          src="./images/minus.png"
                          alt="plus"
                        />
                        <span className="quantity">{item.quantity}</span>
                        <img
                          className="plusAndMinus"
                          src="./images/plus.png"
                          alt="minus"
                        />
                      </span>

                      <span>
                        <span className="plusAndMinusPrice">
                          ₩{Math.floor(data.price).toLocaleString('ko-KR')}
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
              {/* 수량조절/합계금액 영역 */}
              {/* <div className="selectedProduct">
                <div className="selectedProductName">
                  <span className="contentsTitle">{data.type_name}</span>
                  <img
                    className="close"
                    src="./images/close-cross-symbol-in-a-circle.png"
                  />
                </div>

                <div className="plusAndMinusWrapper">
                  <span className="plusAndMinuss">
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
              </div> */}
              <div className="productTotal">
                <span className="quantityWrapper">
                  <span className="contentsTitle">합계</span>
                  <span>수량</span>
                  <span>0</span>
                </span>
                <span className="totalAmount">
                  ₩{Math.floor(this.state.totalPrice).toLocaleString('ko-KR')}
                </span>
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
